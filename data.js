/**
 * CONFIGURACIÓN Y DATOS DE HONDA SUPER MOTOS PEREIRA
 * ------------------------------------------------------------------
 * Este archivo contiene todas las categorías, motocicletas y precios oficiales.
 * Incluye optimización para SEO Local en Pereira, Dosquebradas, Santa Rosa y Risaralda.
 */

const STORE_CONFIG = {
    name: "HONDA SUPER MOTOS PEREIRA",
    tagline: "¡La moto de tus sueños te está esperando en Honda Super Motos Pereira!",
    description: "Concesionario Oficial Honda en Pereira, Dosquebradas, Santa Rosa de Cabal y el Eje Cafetero. Encuentra motos Sport, Scooter, Doble Propósito, Enduro, Cuatrimotos y Touring con las mejores opciones de financiación.",
    logoImage: "images/honda logo.jpg",
    mainPhone: "+57 321 217 9715",
    schedule: "HORARIO: LUNES A SÁBADO DE 7:30 AM A 12:00 PM Y DE 2:00 PM A 6:00 PM",
    copyright: "© 2026 HONDA SUPER MOTOS PEREIRA - Todos los derechos reservados",
    socialLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        youtube: "https://www.youtube.com/"
    },
    // Sedes y contactos de WhatsApp
    branches: [
        {
            name: "SEDE PRINCIPAL PEREIRA",
            address: "Av. 30 de Agosto #35-15",
            city: "Pereira, Risaralda",
            whatsapp: "573212179715",
            displayPhone: "+57 321 217 9715",
            message: "Hola, quiero más información sobre las motocicletas en Honda Super Motos Pereira..."
        },
        {
            name: "SEDE CENTRO PEREIRA",
            address: "Carrera 7 #18-24, Centro",
            city: "Pereira, Risaralda",
            whatsapp: "573212179715",
            displayPhone: "+57 321 217 9715",
            message: "Hola, deseo cotizar una motocicleta en Honda Super Motos Pereira Centro..."
        },
        {
            name: "SEDE DOSQUEBRADAS",
            address: "Av. Simón Bolívar #14-08",
            city: "Dosquebradas, Risaralda",
            whatsapp: "573212179715",
            displayPhone: "+57 321 217 9715",
            message: "Hola, me interesa recibir asesoría en la sede Dosquebradas de Honda Super Motos..."
        },
        {
            name: "SEDE CUBA PEREIRA",
            address: "Calle 71 #24-12, Sector Cuba",
            city: "Pereira, Risaralda",
            whatsapp: "573212179715",
            displayPhone: "+57 321 217 9715",
            message: "Hola, quisiera consultar disponibilidad en Honda Super Motos Sede Cuba Pereira..."
        }
    ],
    // Banners del Hero Slider (Video principal de presentación + Slides)
    heroBanners: [
        {
            isVideo: true,
            videoSrc: "images/hero_video.mp4",
            poster: "images/HONDA AFRICA TWIN ADVENTURE SPORT SE.png",
            badge: "⚡ BIENVENIDO A HONDA SUPER MOTOS PEREIRA",
            title: "HONDA SUPER MOTOS PEREIRA",
            subtitle: "El concesionario #1 de motocicletas en Pereira y el Eje Cafetero. Conoce la línea 2026",
            link: "#Productos",
            btnText: "VER CATÁLOGO"
        },
        {
            image: "images/HONDA CB 300F.png",
            title: "POTENCIA Y ESTILO DEPORTIVO",
            subtitle: "Diseño agresivo, frenos ABS y máximo confort para Pereira, Dosquebradas y Risaralda",
            link: "#Productos",
            btnText: "Cotizar Ahora"
        },
        {
            image: "images/HONDA X3 300L TORNADO.png",
            title: "AVENTURA SIN LÍMITES EN EL EJE CAFETERO",
            subtitle: "Financiación a tu medida en Honda Super Motos Pereira con las mejores tasas",
            link: "#Productos",
            btnText: "Ver Modelos"
        }
    ]
};

// 11 Categorías Oficiales
const CATEGORIES = [
    { id: "sport", name: "Sport", icon: "⚡", image: "images/HONDA CB 300F.png" },
    { id: "scooter", name: "Scooter y Semiautomática", icon: "🛵", image: "images/HONDS PCX 160 ABS.png" },
    { id: "navi", name: "Navi", icon: "🚀", image: "images/HONDA NAVI MIX.png" },
    { id: "todo-terreno", name: "Todo Terreno", icon: "🏔️", image: "images/HONDA X3 300L TORNADO.png" },
    { id: "aventura", name: "Aventura", icon: "⛰️", image: "images/HONDA AFRICA TWIN CRF 1100L.png" },
    { id: "cuatrimotos", name: "Cuatrimotos", icon: "🚜", image: "images/HONDA TRX 250TE.png" },
    { id: "custom", name: "Custom / Cruiser", icon: "🏍️", image: "images/HONDS CMX 500 REBEL.png" },
    { id: "enduro-motocross", name: "Enduro y Motocross", icon: "🏁", image: "images/HONDA CRF 250R.png" },
    { id: "scrambler", name: "Scrambler", icon: "🔥", image: "images/HONDA CB 350D.png" },
    { id: "sxs", name: "SXS / Utilitario", icon: "🚙", image: "images/HONDA PIONEER 1000-5.png" },
    { id: "touring", name: "Touring", icon: "🛣️", image: "images/HONDA GOLDWING.png" }
];

// Listado de Productos Completo (38 Referencias Oficiales)
const PRODUCTS = [
    // ----------------------------------------------------
    // 1. HONDA SPORT
    // ----------------------------------------------------
    {
        id: "xblade-160",
        name: "HONDA XBLADE 160",
        category: "sport",
        categoryLabel: "Sport",
        price: 10290000,
        image: "images/HONDA XBLADE 160.jpg",
        specs: { cilindraje: "162.7 cc", motor: "4T OHC Aire", peso: "144 Kg" },
        description: "Revolución en el segmento sport con diseño agresivo, faro LED robótico y excelente rendimiento en Pereira.",
        isRecommended: true,
        featuredRank: 1
    },
    {
        id: "nx-190",
        name: "HONDA NX 190",
        category: "sport",
        categoryLabel: "Sport",
        price: 14690000,
        image: "images/HONDA NX 190.png",
        specs: { cilindraje: "184.4 cc", motor: "4T OHC Aire", peso: "146 Kg" },
        description: "Estilo crossover con posición erguida, frenos ABS y suspensión invertida ideal para el Eje Cafetero.",
        isRecommended: false,
        featuredRank: 2
    },
    {
        id: "cb-300f",
        name: "HONDA CB 300F",
        category: "sport",
        categoryLabel: "Sport",
        price: 16800000,
        image: "images/HONDA CB 300F.png",
        specs: { cilindraje: "293 cc", motor: "4T 4V Enfriado por Aceite", peso: "153 Kg" },
        description: "Potencia naked agresiva con embrague asistido e antirrebote, control de tracción HSTC y ABS doble canal.",
        isRecommended: true,
        featuredRank: 3
    },
    {
        id: "cb-190r-2",
        name: "HONDA CB 190R 2.0",
        category: "sport",
        categoryLabel: "Sport",
        price: 12790000,
        image: "images/HONDS CB 190R.png",
        specs: { cilindraje: "184 cc", motor: "4T OHC Inyección", peso: "140 Kg" },
        description: "Nueva versión 2.0 con frenos ABS, suspensión invertida e iluminación 100% LED.",
        isRecommended: false,
        featuredRank: 4
    },
    {
        id: "cb-125-dlx-h2",
        name: "HONDA CB 125 DLX H2",
        category: "sport",
        categoryLabel: "Sport",
        price: 7150000,
        image: "images/HONDS CB 125 DLX H2.png",
        specs: { cilindraje: "124.7 cc", motor: "4T OHC Aire", peso: "117 Kg" },
        description: "Edición Deluxe con acabados premium, tablero digital y óptimo ahorro de combustible.",
        isRecommended: false,
        featuredRank: 5
    },
    {
        id: "cb125f-std-2",
        name: "HONDA CB125F STD 2.0",
        category: "sport",
        categoryLabel: "Sport",
        price: 6890000,
        image: "images/HONDA CB125F STD 2..png",
        specs: { cilindraje: "124.7 cc", motor: "4T OHC Aire", peso: "117 Kg" },
        description: "La compañera ideal para el trabajo y transporte diario en Pereira y Dosquebradas.",
        isRecommended: false,
        featuredRank: 6
    },
    {
        id: "cb-100",
        name: "HONDA CB 100",
        category: "sport",
        categoryLabel: "Sport",
        price: 5700000,
        image: "images/HONDS CB 100.png",
        specs: { cilindraje: "98.98 cc", motor: "4 Tiempos", peso: "98 Kg" },
        description: "Siempre firme con tu economía y tu trabajo. La opción más accesible con respaldo Honda en Pereira.",
        isRecommended: false,
        featuredRank: 7
    },
    {
        id: "cb650r-std",
        name: "HONDA CB650R (STD)",
        category: "sport",
        categoryLabel: "Sport",
        price: 54990000,
        image: "images/HONDA CB650R.webp",
        specs: { cilindraje: "649 cc", motor: "4 Cilindros en línea DOHC", peso: "202 Kg" },
        description: "Estilo Neo Sports Café con motor tetracilíndrico de sonido inconfundible y alto rendimiento.",
        isRecommended: false,
        featuredRank: 8
    },
    {
        id: "cb650r-dlx",
        name: "HONDA CB650R (EDICIÓN ESPECIAL)",
        category: "sport",
        categoryLabel: "Sport",
        price: 55790000,
        image: "images/HONDA CB650R.webp",
        specs: { cilindraje: "649 cc", motor: "4 Cilindros DOHC 16V", peso: "202 Kg" },
        description: "Equipamiento superior, acabados en bronce y máxima emoción sobre el asfalto.",
        isRecommended: false,
        featuredRank: 9
    },

    // ----------------------------------------------------
    // 2. HONDA SCOOTER
    // ----------------------------------------------------
    {
        id: "wave-110s",
        name: "HONDA WAVE 110S",
        category: "scooter",
        categoryLabel: "Scooter y Semiautomática",
        price: 7790000,
        image: "images/HONDA WAVE 110.png",
        specs: { cilindraje: "109.1 cc", motor: "4T OHC Semiautomática", peso: "100 Kg" },
        description: "La semiautomática más vendida y confiable en Colombia. Manejo sencillo sin embrague manual.",
        isRecommended: false,
        featuredRank: 10
    },
    {
        id: "pcx-160-abs",
        name: "HONDA PCX 160 ABS",
        category: "scooter",
        categoryLabel: "Scooter",
        price: 14800000,
        image: "images/HONDS PCX 160 ABS.png",
        specs: { cilindraje: "156.9 cc", motor: "eSP+ 4V SOHC", peso: "131 Kg" },
        description: "Scooter premium con control de tracción HSTC, llave inteligente Smart Key y frenos ABS.",
        isRecommended: true,
        featuredRank: 11
    },
    {
        id: "dio-led-dlx",
        name: "HONDA DIO LED DLX",
        category: "scooter",
        categoryLabel: "Scooter",
        price: 7940000,
        image: "images/HONDA DIO LED DLX.png",
        specs: { cilindraje: "109.2 cc", motor: "4T OHC Aire", peso: "104 Kg" },
        description: "Versión Deluxe de la scooter Dio con gráficos especiales, tablero digital y luz LED.",
        isRecommended: false,
        featuredRank: 12
    },
    {
        id: "dio-led",
        name: "HONDA DIO LED",
        category: "scooter",
        categoryLabel: "Scooter",
        price: 7390000,
        image: "images/HONDA DIO LED.png",
        specs: { cilindraje: "109.2 cc", motor: "4T OHC Aire", peso: "104 Kg" },
        description: "Ágil, juvenil y económica. Baúl de gran capacidad y frenos combinados CBS.",
        isRecommended: false,
        featuredRank: 13
    },

    // ----------------------------------------------------
    // 3. HONDA NAVI
    // ----------------------------------------------------
    {
        id: "navi-mix",
        name: "HONDA NAVI MIX",
        category: "navi",
        categoryLabel: "Navi",
        price: 7590000,
        image: "images/HONDA NAVI MIX.png",
        specs: { cilindraje: "109.19 cc", motor: "4T Automática HET", peso: "101 Kg" },
        description: "La combinación perfecta entre estilo urbano y practicidad automática en Pereira.",
        isRecommended: false,
        featuredRank: 14
    },
    {
        id: "navi-std",
        name: "HONDA NAVI",
        category: "navi",
        categoryLabel: "Navi",
        price: 7290000,
        image: "images/HONDA NAVI.png",
        specs: { cilindraje: "109.19 cc", motor: "4T Automática HET", peso: "101 Kg" },
        description: "Icono de movilidad urbana customizable. Transmisión automática sin cambios.",
        isRecommended: false,
        featuredRank: 15
    },
    {
        id: "navi-adventure",
        name: "HONDA NAVI ADVENTURE",
        category: "navi",
        categoryLabel: "Navi",
        price: 7850000,
        image: "images/HONDA NAVI ADVENTURE.png",
        specs: { cilindraje: "109.19 cc", motor: "4T Automática HET", peso: "101 Kg" },
        description: "Edición con accesorios tipo adventure (cubremanos, visor y protectores laterales).",
        isRecommended: false,
        featuredRank: 16
    },
    {
        id: "navi-rally",
        name: "HONDA NAVI RALLY",
        category: "navi",
        categoryLabel: "Navi",
        price: 7850000,
        image: "images/HONDA NAVI RALLY.png",
        specs: { cilindraje: "109.19 cc", motor: "4T Automática HET", peso: "101 Kg" },
        description: "Espíritu de competencia con stickers de carreras y accesorios deportivos de fábrica.",
        isRecommended: false,
        featuredRank: 17
    },

    // ----------------------------------------------------
    // 4. HONDA TODOTERRENO
    // ----------------------------------------------------
    {
        id: "xr-300l-tornado",
        name: "HONDA XR 300L TORNADO",
        category: "todo-terreno",
        categoryLabel: "Todo Terreno",
        price: 30490000,
        image: "images/HONDA X3 300L TORNADO.png",
        specs: { cilindraje: "293.5 cc", motor: "DOHC 4V Inyección", peso: "149 Kg" },
        description: "El regreso de la leyenda Tornado. Motor 300cc inyectado, frenos ABS desconectables y suspensión de largo recorrido para las trochas de Risaralda.",
        isRecommended: true,
        featuredRank: 18
    },
    {
        id: "xr-190l-abs",
        name: "HONDA XR 190L 2.0 ABS",
        category: "todo-terreno",
        categoryLabel: "Todo Terreno",
        price: 13900000,
        image: "images/HONDA XR 190L 2.0 ABS.png",
        specs: { cilindraje: "184 cc", motor: "4T OHC Inyección PGM-FI", peso: "133 Kg" },
        description: "La doble propósito de mayor éxito ahora con frenos ABS para mayor seguridad en todo terreno.",
        isRecommended: false,
        featuredRank: 19
    },
    {
        id: "xr-150l-abs",
        name: "HONDA XR 150L 2.0 ABS",
        category: "todo-terreno",
        categoryLabel: "Todo Terreno",
        price: 10590000,
        image: "images/HONDA XR 150L 2.0 ABS.png",
        specs: { cilindraje: "149.1 cc", motor: "4T OHC Aire", peso: "122 Kg" },
        description: "La puerta de entrada al segmento doble propósito. Cómoda, versátil y resistente.",
        isRecommended: false,
        featuredRank: 20
    },

    // ----------------------------------------------------
    // 5. HONDA AVENTURA
    // ----------------------------------------------------
    {
        id: "africa-twin-1100l",
        name: "HONDA AFRICA TWIN CRF 1100L",
        category: "aventura",
        categoryLabel: "Aventura",
        price: 85990000,
        image: "images/HONDA AFRICA TWIN CRF 1100L.png",
        specs: { cilindraje: "1084 cc", motor: "Bicilíndrico Unicam", peso: "226 Kg" },
        description: "Diseñada para las expediciones más exigentes. Pantalla TFT con Apple CarPlay y Android Auto.",
        isRecommended: false,
        featuredRank: 21
    },
    {
        id: "africa-twin-adv-se",
        name: "HONDA AFRICA TWIN ADVENTURE SPORT SE",
        category: "aventura",
        categoryLabel: "Aventura",
        price: 104490000,
        image: "images/HONDA AFRICA TWIN ADVENTURE SPORT SE.png",
        specs: { cilindraje: "1084 cc", motor: "Bicilíndrico DCT Electrónico", peso: "248 Kg" },
        description: "Suspensión electrónica Showa EERA, depósito de combustible de 24.8L y tanque de mayor autonomía.",
        isRecommended: true,
        featuredRank: 22
    },
    {
        id: "xadv-750",
        name: "HONDA XADV",
        category: "aventura",
        categoryLabel: "Aventura Crossover",
        price: 73990000,
        image: "images/HONDA XADV.png",
        specs: { cilindraje: "745 cc", motor: "Bicilíndrico DCT 6V", peso: "236 Kg" },
        description: "El primer SUV de dos ruedas. Combina la agilidad de un scooter con la capacidad adventure.",
        isRecommended: false,
        featuredRank: 23
    },

    // ----------------------------------------------------
    // 6. HONDA CUATRIMOTOS
    // ----------------------------------------------------
    {
        id: "trx-250te",
        name: "HONDA TRX 250TE",
        category: "cuatrimotos",
        categoryLabel: "Cuatrimotos",
        price: 29990000,
        image: "images/HONDA TRX 250TE.png",
        specs: { cilindraje: "229 cc", motor: "4T Longitudinal SOHC", peso: "212 Kg" },
        description: "Cuatrimoto utilitaria con cambio eléctrico ESP (Electric Shift Program) y tracción cardánica.",
        isRecommended: false,
        featuredRank: 24
    },
    {
        id: "trx-250x",
        name: "HONDA TRX 250X",
        category: "cuatrimotos",
        categoryLabel: "Cuatrimotos",
        price: 32990000,
        image: "images/HONDA TRX.png",
        specs: { cilindraje: "229 cc", motor: "4T Sport SOHC", peso: "174 Kg" },
        description: "Diseño deportivo ligero con embrague asistido SportClutch para máxima diversión deportiva.",
        isRecommended: false,
        featuredRank: 25
    },

    // ----------------------------------------------------
    // 7. HONDA CUSTOM
    // ----------------------------------------------------
    {
        id: "cmx-500-rebel-custom",
        name: "HONDA CMX 500 REBEL",
        category: "custom",
        categoryLabel: "Custom",
        price: 37990000,
        image: "images/HONDS CMX 500 REBEL.png",
        specs: { cilindraje: "471 cc", motor: "DOHC 8V Bicilíndrico", peso: "191 Kg" },
        description: "Bobber icónica de bajas revoluciones y gran estilo custom personalizable.",
        isRecommended: true,
        featuredRank: 26
    },

    // ----------------------------------------------------
    // 8. HONDA ENDURO Y MOTOCROSS
    // ----------------------------------------------------
    {
        id: "crf-250f-enduro",
        name: "HONDA CRF 250F",
        category: "enduro-motocross",
        categoryLabel: "Enduro y Motocross",
        price: 21990000,
        image: "images/HONDA CRF 250F.png",
        specs: { cilindraje: "249 cc", motor: "SOHC 4V Inyección", peso: "118 Kg" },
        description: "Recreacional todoterreno con encendido eléctrico e inyección electrónica.",
        isRecommended: false,
        featuredRank: 27
    },
    {
        id: "crf-250r",
        name: "HONDA CRF 250R",
        category: "enduro-motocross",
        categoryLabel: "Enduro y Motocross",
        price: 43990000,
        image: "images/HONDA CRF 250R.png",
        specs: { cilindraje: "249.4 cc", motor: "DOHC 4V Monocilíndrico", peso: "104 Kg" },
        description: "Máquina de competición MX pura de nivel profesional con control de salida HRC.",
        isRecommended: false,
        featuredRank: 28
    },
    {
        id: "crf-250rx",
        name: "HONDA CRF 250RX",
        category: "enduro-motocross",
        categoryLabel: "Enduro y Motocross",
        price: 44990000,
        image: "images/HONDA CRF 250RX.png",
        specs: { cilindraje: "249.4 cc", motor: "DOHC 4V Monocilíndrico", peso: "108 Kg" },
        description: "Desarrollada para competencias Enduro Cross-Country con tanque de mayor capacidad.",
        isRecommended: false,
        featuredRank: 29
    },
    {
        id: "crf-450r",
        name: "HONDA CRF 450R",
        category: "enduro-motocross",
        categoryLabel: "Enduro y Motocross",
        price: 49590000,
        image: "images/HONDA CRF 450R.png",
        specs: { cilindraje: "449.7 cc", motor: "Unicam 4V Monocilíndrico", peso: "110.6 Kg" },
        description: "El referente absoluto de las pistas de Motocross. Chasis de aluminio de última generación.",
        isRecommended: false,
        featuredRank: 30
    },
    {
        id: "crf-450rx",
        name: "HONDA CRF 450RX",
        category: "enduro-motocross",
        categoryLabel: "Enduro y Motocross",
        price: 47990000,
        image: "images/HONDA CRF 450RX.png",
        specs: { cilindraje: "449.7 cc", motor: "Unicam 4V Monocilíndrico", peso: "113.4 Kg" },
        description: "Versión Enduro del motor 450cc con llanta trasera de 18 polegadas y patas de apoyo.",
        isRecommended: false,
        featuredRank: 31
    },
    {
        id: "crf-50f",
        name: "HONDA CRF 50F",
        category: "enduro-motocross",
        categoryLabel: "Enduro y Motocross",
        price: 9900000,
        image: "images/HONDA CRF 50F.jpg",
        specs: { cilindraje: "49 cc", motor: "4T SOHC 2V", peso: "50 Kg" },
        description: "La primera moto para los más jóvenes pilotos con embrague automático y regulador de acelerador.",
        isRecommended: false,
        featuredRank: 32
    },

    // ----------------------------------------------------
    // 9. HONDA SCRAMBLER
    // ----------------------------------------------------
    {
        id: "cb-350d-scrambler",
        name: "HONDA CB 350D",
        category: "scrambler",
        categoryLabel: "Scrambler",
        price: 19990000,
        image: "images/HONDA CB 350D.png",
        specs: { cilindraje: "348 cc", motor: "Monocilíndrico Aire 4T", peso: "181 Kg" },
        description: "Estilo retro Scrambler con sonido contundente y alto torque a bajas revoluciones.",
        isRecommended: false,
        featuredRank: 33
    },

    // ----------------------------------------------------
    // 10. HONDA SXS
    // ----------------------------------------------------
    {
        id: "pioneer-1000-3",
        name: "HONDA PIONEER 1000-3",
        category: "sxs",
        categoryLabel: "SXS / Utilitario",
        price: 104990000,
        image: "images/HONDA PIONEER 1000-3.png",
        specs: { cilindraje: "999 cc", motor: "Bicilíndrico Unicam", peso: "700 Kg" },
        description: "Side-by-side de 3 pasajeros con transmisión DCT de 6 velocidades y modos AT/MT.",
        isRecommended: false,
        featuredRank: 34
    },
    {
        id: "pioneer-1000-5",
        name: "HONDA PIONEER 1000-5",
        category: "sxs",
        categoryLabel: "SXS / Utilitario",
        price: 116990000,
        image: "images/HONDA PIONEER 1000-5.png",
        specs: { cilindraje: "999 cc", motor: "Bicilíndrico Unicam", peso: "760 Kg" },
        description: "Capacidad para 5 pasajeros con asientos convertibles QuickFlip® y tracción 4x4.",
        isRecommended: false,
        featuredRank: 35
    },
    {
        id: "pioneer-520-2",
        name: "HONDA PIONEER 520-2",
        category: "sxs",
        categoryLabel: "SXS / Utilitario",
        price: 69990000,
        image: "images/HONDA PIONEER 520-2.png",
        specs: { cilindraje: "518 cc", motor: "4T Longitudinal Monocilíndrico", peso: "480 Kg" },
        description: "Compacto y capaz de ingresar en senderos estrechos con volquete basculante.",
        isRecommended: false,
        featuredRank: 36
    },
    {
        id: "pioneer-700",
        name: "HONDA PIONEER 700",
        category: "sxs",
        categoryLabel: "SXS / Utilitario",
        price: 94990000,
        image: "images/HONDA PIONEER 700.png",
        specs: { cilindraje: "675 cc", motor: "4T Monocilíndrico 4V", peso: "640 Kg" },
        description: "Vehículo utilitario de 4 personas ideal para el trabajo en fincas y recreación todoterreno.",
        isRecommended: false,
        featuredRank: 37
    },

    // ----------------------------------------------------
    // 11. HONDA TOURING
    // ----------------------------------------------------
    {
        id: "goldwing-touring",
        name: "HONDA GOLDWING",
        category: "touring",
        categoryLabel: "Touring",
        price: 145990000,
        image: "images/HONDA GOLDWING.png",
        specs: { cilindraje: "1833 cc", motor: "6 Cilindros horizontales", peso: "383 Kg" },
        description: "La leyenda del turismo mundial con transmisión DCT de 7 velocidades, Airbag y suspensión delantera Double Wishbone.",
        isRecommended: true,
        featuredRank: 38
    }
];

// Artículos del Blog / Noticias con datos oficiales de Honda Super Motos Pereira
const BLOG_POSTS = [
    {
        id: 1,
        title: "HONDA CB100 Y CB 110 STD: ECONOMIA Y SEGURIDAD PARA EL MOTOCICLISTA",
        category: "Noticias",
        date: "Febrero 25, 2025",
        image: "images/noticia_cb100.jpg",
        summary: "Descubre por qué la Honda CB 100 y la CB110 STD son las motos preferidas por los motociclistas"
    },
    {
        id: 2,
        title: "SENCILLOS PASOS PARA LAVAR TU MOTO MIENTRAS ESTAS EN CASA",
        category: "Noticias",
        date: "Febrero 25, 2025",
        image: "images/noticia_lavado.jpg",
        summary: "Aprovecha el tiempo para darle un cuidado especial a tu moto. Con esta guía simple sabrás cómo lavarla desde casa."
    },
    {
        id: 3,
        title: "ACEITE PRO HONDA: COMO Y CUANDO CAMBIARLO EN TU MOTO",
        category: "Noticias",
        date: "Febrero 25, 2025",
        image: "images/noticia_aceite.jpg",
        summary: "¿Cada cuánto se cambia el aceite de una moto? Resolvemos esta y otras preguntas clave para ayudarte a brindar el cuidado adecuado a tu moto, asegurando su óptimo rendimiento y una mayor durabilidad en cada recorrido."
    }
];
