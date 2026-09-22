/**
 * LÓGICA DE INTERACCIÓN Y RENDERIZADO DINÁMICO
 * ------------------------------------------------------------------
 * Renderiza dinámicamente los datos de data.js en la página web
 * y gestiona filtros, ordenamiento, carruseles, modales y WhatsApp.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Estado de la aplicación
    let currentCategoryFilter = 'all';
    let currentOrder = 'featured';
    let activeModalProduct = null;
    let currentModalQty = 1;
    let currentSlideIndex = 0;
    let slideTimer = null;

    // Elementos del DOM
    const heroContainer = document.getElementById('heroSlider');
    const heroDotsContainer = document.getElementById('heroDots');
    const categoryScrollContainer = document.getElementById('categoryScrollContainer');
    const recommendedGrid = document.getElementById('recommendedGrid');
    const catalogGrid = document.getElementById('catalogGrid');
    const categoryFilterSelect = document.getElementById('categoryFilterSelect');
    const orderFilterSelect = document.getElementById('orderFilterSelect');
    const blogGrid = document.getElementById('blogGrid');
    const branchListDrawer = document.getElementById('branchListDrawer');
    const megaMenuList = document.getElementById('megaMenuList');
    const searchOverlay = document.getElementById('searchOverlay');

    // Inicializar Componentes
    initStoreInfo();
    initIntroVideoModal();
    initHeroSlider();
    initCategories();
    initRecommendedProducts();
    initCatalog();
    initBlog();
    initWhatsAppDrawer();
    initEventListeners();

    /* ==========================================================================
       1. FORMATEO DE MONEDA Y UTILIDADES
       ========================================================================== */

    function formatCurrency(amount) {
        if (!amount || isNaN(amount)) return '$ 0';
        return '$ ' + amount.toLocaleString('es-CO');
    }

    /* ==========================================================================
       2. INTRO VIDEO POPUP MODAL (BIENVENIDA)
       ========================================================================== */

    function initIntroVideoModal() {
        const introModal = document.getElementById('introVideoModal');
        const introVideo = document.getElementById('introVideo');
        const introCloseBtn = document.getElementById('introCloseBtn');
        const introEnterSiteBtn = document.getElementById('introEnterSiteBtn');

        function closeIntroModal() {
            if (introModal) {
                introModal.classList.remove('active');
                if (introVideo) {
                    introVideo.pause();
                }
            }
        }

        if (introCloseBtn) introCloseBtn.addEventListener('click', closeIntroModal);
        if (introEnterSiteBtn) introEnterSiteBtn.addEventListener('click', closeIntroModal);
        
        if (introModal) {
            introModal.addEventListener('click', (e) => {
                if (e.target.id === 'introVideoModal') {
                    closeIntroModal();
                }
            });
        }
    }

    /* ==========================================================================
       3. DATOS CORPORATIVOS & MENÚS
       ========================================================================== */

    function initStoreInfo() {
        // Asignar textos de configuración general
        document.querySelectorAll('.store-name-text').forEach(el => el.textContent = STORE_CONFIG.name);
        document.querySelectorAll('.store-tagline-text').forEach(el => el.textContent = STORE_CONFIG.tagline);
        document.querySelectorAll('.store-desc-text').forEach(el => el.textContent = STORE_CONFIG.description);
        document.querySelectorAll('.store-phone-text').forEach(el => el.textContent = STORE_CONFIG.mainPhone);
        document.querySelectorAll('.store-schedule-text').forEach(el => el.textContent = STORE_CONFIG.schedule);
        document.querySelectorAll('.store-copyright-text').forEach(el => el.textContent = STORE_CONFIG.copyright);

        // Mega Menú
        if (megaMenuList) {
            megaMenuList.innerHTML = CATEGORIES.map(cat => `
                <a href="#Productos" class="mega-menu-item" data-cat="${cat.id}">
                    <span style="margin-right: 10px;">${cat.icon}</span> ${cat.name}
                </a>
            `).join('');
        }
    }

    /* ==========================================================================
       4. HERO SLIDER CARRUSEL (DESPLIEGUE PERFECTO DE IMÁGENES SIN RECORTES)
       ========================================================================== */

    function initHeroSlider() {
        if (!heroContainer || !STORE_CONFIG.heroBanners.length) return;

        heroContainer.innerHTML = STORE_CONFIG.heroBanners.map((banner, index) => {
            if (banner.isVideo) {
                return `
                    <div class="slide-item ${index === 0 ? 'active' : ''} video-slide">
                        <video class="hero-bg-video" autoplay muted loop playsinline poster="${banner.poster}">
                            <source src="${banner.videoSrc}" type="video/mp4">
                        </video>
                        <div class="slide-bg-gradient"></div>
                        <div class="container">
                            <div class="slide-content">
                                ${banner.badge ? `<span class="hero-badge">${banner.badge}</span>` : ''}
                                <h2 class="slide-title">${banner.title}</h2>
                                <p class="slide-subtitle">${banner.subtitle}</p>
                                <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                                    <a href="${banner.link}" class="btn-primary-red">${banner.btnText}</a>
                                    <button type="button" class="btn-video-sound" id="heroSoundToggleBtn" title="Activar/Desactivar Sonido">
                                        🔊 Sonido
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            return `
                <div class="slide-item ${index === 0 ? 'active' : ''}">
                    <div class="slide-bg-gradient"></div>
                    <div class="slide-img-wrapper">
                        <img src="${banner.image}" alt="${banner.title}" class="slide-hero-img">
                    </div>
                    <div class="container">
                        <div class="slide-content">
                            <h2 class="slide-title">${banner.title}</h2>
                            <p class="slide-subtitle">${banner.subtitle}</p>
                            <a href="${banner.link}" class="btn-primary-red">${banner.btnText}</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Control de sonido para video hero
        const soundBtn = document.getElementById('heroSoundToggleBtn');
        if (soundBtn) {
            soundBtn.addEventListener('click', () => {
                const vid = document.querySelector('.hero-bg-video');
                if (vid) {
                    vid.muted = !vid.muted;
                    soundBtn.textContent = vid.muted ? '🔊 Activar Sonido' : '🔇 Silenciar';
                }
            });
        }

        if (heroDotsContainer) {
            heroDotsContainer.innerHTML = STORE_CONFIG.heroBanners.map((_, index) => `
                <div class="dot-item ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
            `).join('');
        }

        startSlideInterval();
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide-item');
        const dots = document.querySelectorAll('.dot-item');
        if (!slides.length) return;

        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        currentSlideIndex = index;

        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function startSlideInterval() {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => {
            showSlide(currentSlideIndex + 1);
        }, 5000);
    }

    /* ==========================================================================
       5. CARRUSEL DE CATEGORÍAS
       ========================================================================== */

    function initCategories() {
        if (!categoryScrollContainer) return;

        categoryScrollContainer.innerHTML = CATEGORIES.map(cat => `
            <div class="category-card" data-cat="${cat.id}">
                <div class="category-icon-box">
                    <img src="${cat.image}" alt="${cat.name}" loading="lazy">
                </div>
                <div class="category-name">${cat.name}</div>
            </div>
        `).join('');

        // Flechas de navegación para deslizar las categorías
        const catPrevBtn = document.getElementById('catPrevBtn');
        const catNextBtn = document.getElementById('catNextBtn');
        if (catPrevBtn && catNextBtn) {
            catPrevBtn.addEventListener('click', () => {
                categoryScrollContainer.scrollBy({ left: -260, behavior: 'smooth' });
            });
            catNextBtn.addEventListener('click', () => {
                categoryScrollContainer.scrollBy({ left: 260, behavior: 'smooth' });
            });
        }

        // Cargar opciones en el select del catálogo
        if (categoryFilterSelect) {
            const optionsHTML = `<option value="all">Todas las categorías</option>` +
                CATEGORIES.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('');
            categoryFilterSelect.innerHTML = optionsHTML;
        }
    }

    /* ==========================================================================
       6. RECOMENDADAS DEL MES Y CATÁLOGO PRINCIPAL
       ========================================================================== */

    function renderProductCard(product) {
        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-thumb-container">
                    <button class="favorite-btn" title="Guardar en Favoritos" aria-label="Favorito">
                        <i class="fa fa-heart-o">♥</i>
                    </button>
                    <img src="${product.image}" alt="${product.name}" class="product-thumb-img" loading="lazy">
                </div>
                <div class="product-info-body">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price-tag">${formatCurrency(product.price)}</div>
                    
                    <div class="product-specs-grid">
                        <div class="spec-item">
                            <span class="spec-label">Cilindraje</span>
                            <span class="spec-value">${product.specs.cilindraje}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Motor</span>
                            <span class="spec-value">${product.specs.motor}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Peso</span>
                            <span class="spec-value">${product.specs.peso}</span>
                        </div>
                    </div>

                    <button class="btn-cotizar open-modal-btn" data-id="${product.id}">Cotizar</button>
                </div>
            </div>
        `;
    }

    function initRecommendedProducts() {
        if (!recommendedGrid) return;

        const recommendedList = PRODUCTS.filter(p => p.isRecommended || p.featuredRank <= 2);
        recommendedGrid.innerHTML = recommendedList.map(renderProductCard).join('');
    }

    function initCatalog() {
        renderCatalog();
    }

    function renderCatalog() {
        if (!catalogGrid) return;

        // 1. Filtrado
        let filtered = PRODUCTS.filter(p => {
            if (currentCategoryFilter === 'all') return true;
            return p.category === currentCategoryFilter;
        });

        // 2. Ordenamiento
        filtered.sort((a, b) => {
            if (currentOrder === 'lower_price') return a.price - b.price;
            if (currentOrder === 'higher_price') return b.price - a.price;
            if (currentOrder === 'asc_name') return a.name.localeCompare(b.name);
            if (currentOrder === 'desc_name') return b.name.localeCompare(a.name);
            return a.featuredRank - b.featuredRank; // Default: 'featured'
        });

        if (filtered.length === 0) {
            catalogGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">
                    <h3>No se encontraron motocicletas en esta categoría.</h3>
                </div>
            `;
            return;
        }

        catalogGrid.innerHTML = filtered.map(renderProductCard).join('');
    }

    /* ==========================================================================
       7. BLOG / NOTICIAS
       ========================================================================== */

    function initBlog() {
        if (!blogGrid) return;

        blogGrid.innerHTML = BLOG_POSTS.map(post => `
            <div class="blog-card">
                <div class="blog-img-box">
                    <img src="${post.image}" alt="${post.title}" class="blog-img" loading="lazy">
                </div>
                <div class="blog-body">
                    <span class="blog-category-badge">${post.category}</span>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-summary">${post.summary}</p>
                    <div class="blog-footer">
                        <span>${post.date}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    /* ==========================================================================
       8. WIDGET FLOTANTE DE WHATSAPP MULTISEDE
       ========================================================================== */

    function initWhatsAppDrawer() {
        if (!branchListDrawer) return;

        branchListDrawer.innerHTML = STORE_CONFIG.branches.map(b => {
            const encodedMsg = encodeURIComponent(b.message);
            const wspUrl = `https://api.whatsapp.com/send?phone=${b.whatsapp}&text=${encodedMsg}`;
            return `
                <a href="${wspUrl}" target="_blank" class="branch-item" rel="noopener">
                    <div class="branch-name">${b.name}</div>
                    <div class="branch-address">${b.address} (${b.city})</div>
                    <div class="branch-phone">💬 ${b.displayPhone}</div>
                </a>
            `;
        }).join('');
    }

    /* ==========================================================================
       9. MODAL DE DETALLE Y COTIZACIÓN DE PRODUCTO
       ========================================================================== */

    function openProductModal(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        activeModalProduct = product;
        currentModalQty = 1;

        const backdrop = document.getElementById('productModal');
        if (!backdrop) return;

        document.getElementById('modalThumbImg').src = product.image;
        document.getElementById('modalThumbImg').alt = product.name;
        document.getElementById('modalProductTitle').textContent = product.name;
        document.getElementById('modalProductPrice').textContent = formatCurrency(product.price);
        document.getElementById('modalProductDesc').textContent = product.description;
        document.getElementById('modalQtyVal').textContent = currentModalQty;

        // Specs
        const specsList = document.getElementById('modalSpecsList');
        if (specsList) {
            specsList.innerHTML = `
                <li><strong>Categoría:</strong> ${product.categoryLabel}</li>
                <li><strong>Cilindraje:</strong> ${product.specs.cilindraje}</li>
                <li><strong>Motor:</strong> ${product.specs.motor}</li>
                <li><strong>Peso seco:</strong> ${product.specs.peso}</li>
            `;
        }

        backdrop.classList.add('active');
    }

    function closeModal() {
        const backdrop = document.getElementById('productModal');
        if (backdrop) backdrop.classList.remove('active');
    }

    function sendWhatsAppQuote() {
        if (!activeModalProduct) return;

        const mainBranch = STORE_CONFIG.branches[0] || { whatsapp: "573124320614" };
        const text = `Hola, me interesa recibir una cotización de la motocicleta:\n- *Modelo*: ${activeModalProduct.name}\n- *Precio ref*: ${formatCurrency(activeModalProduct.price)}\n- *Cantidad*: ${currentModalQty}\n- *Cilindraje*: ${activeModalProduct.specs.cilindraje}`;
        
        const wspUrl = `https://api.whatsapp.com/send?phone=${mainBranch.whatsapp}&text=${encodeURIComponent(text)}`;
        window.open(wspUrl, '_blank');
    }

    /* ==========================================================================
       10. MANEJO DE EVENTOS
       ========================================================================== */

    function initEventListeners() {
        // Hero controls
        document.querySelector('.slider-prev')?.addEventListener('click', () => {
            showSlide(currentSlideIndex - 1);
            startSlideInterval();
        });

        document.querySelector('.slider-next')?.addEventListener('click', () => {
            showSlide(currentSlideIndex + 1);
            startSlideInterval();
        });

        heroDotsContainer?.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot-item')) {
                const idx = parseInt(e.target.dataset.index);
                showSlide(idx);
                startSlideInterval();
            }
        });

        // Click en Categorías (Carrusel & MegaMenú)
        document.addEventListener('click', (e) => {
            const catCard = e.target.closest('[data-cat]');
            if (catCard) {
                const catId = catCard.dataset.cat;
                currentCategoryFilter = catId;
                if (categoryFilterSelect) categoryFilterSelect.value = catId;
                renderCatalog();

                // Scroll suave a catálogo
                document.getElementById('Productos')?.scrollIntoView({ behavior: 'smooth' });
            }

            // Botón abrir modal
            const openModalBtn = e.target.closest('.open-modal-btn');
            if (openModalBtn) {
                const prodId = openModalBtn.dataset.id;
                openProductModal(prodId);
            }
        });

        // Filtro y Ordenamiento Selects
        categoryFilterSelect?.addEventListener('change', (e) => {
            currentCategoryFilter = e.value || e.target.value;
            renderCatalog();
        });

        orderFilterSelect?.addEventListener('change', (e) => {
            currentOrder = e.value || e.target.value;
            renderCatalog();
        });

        // Buscador Overlay
        const searchBtn = document.getElementById('searchTriggerBtn');
        searchBtn?.addEventListener('click', () => {
            searchOverlay?.classList.toggle('active');
        });

        document.getElementById('searchCloseBtn')?.addEventListener('click', () => {
            searchOverlay?.classList.remove('active');
        });

        document.getElementById('searchInput')?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                renderCatalog();
                return;
            }

            const filtered = PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.categoryLabel.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );

            if (catalogGrid) {
                if (filtered.length === 0) {
                    catalogGrid.innerHTML = `
                        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">
                            <h3>No se encontraron resultados para "${query}"</h3>
                        </div>
                    `;
                } else {
                    catalogGrid.innerHTML = filtered.map(renderProductCard).join('');
                }
            }
        });

        // Drawer WhatsApp Flotante
        const wspBtn = document.getElementById('wspTriggerBtn');
        const wspDrawer = document.getElementById('wspPopupDrawer');

        wspBtn?.addEventListener('click', () => {
            wspDrawer?.classList.toggle('active');
        });

        document.getElementById('wspDrawerClose')?.addEventListener('click', () => {
            wspDrawer?.classList.remove('active');
        });

        // Modal de Producto
        document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
        document.getElementById('productModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'productModal') closeModal();
        });

        document.getElementById('modalQtyMinus')?.addEventListener('click', () => {
            if (currentModalQty > 1) {
                currentModalQty--;
                document.getElementById('modalQtyVal').textContent = currentModalQty;
            }
        });

        document.getElementById('modalQtyPlus')?.addEventListener('click', () => {
            currentModalQty++;
            document.getElementById('modalQtyVal').textContent = currentModalQty;
        });

        document.getElementById('btnSendWspQuote')?.addEventListener('click', sendWhatsAppQuote);

        // Banner de Cookies
        const cookieBtn = document.getElementById('cookieDismissBtn');
        const cookieBanner = document.getElementById('cookieBanner');
        
        if (localStorage.getItem('cookiesAccepted') === 'true') {
            if (cookieBanner) cookieBanner.style.display = 'none';
        }

        cookieBtn?.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            if (cookieBanner) cookieBanner.style.display = 'none';
        });

        // Click en el logo para ir al inicio de la página principal
        document.querySelectorAll('.logo-brand').forEach(logo => {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (history.pushState) {
                    history.pushState(null, null, ' ');
                } else {
                    location.hash = '';
                }
            });
        });

        // Menú hamburguesa móvil
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');

        hamburgerBtn?.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '75px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = '#FFFFFF';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }
});
