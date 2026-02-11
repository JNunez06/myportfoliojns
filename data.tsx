import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Facebook, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";


export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} stroke="red" strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} stroke="#0077b5" strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Facebook size={30} stroke="blue" strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Perfil",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Proyectos",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Mantenimiento de Software (Full Stack)",
        subtitle: "LWP S.A.C – Tingo María",
        description: "Mantenimiento y mejora de software de marketing, soporte full stack, corrección de errores y aplicación de buenas prácticas de calidad y seguridad.",
        date: "07/25 – 12/25",
    },
    {
        id: 2,
        title: "Proyectos en Ciencia de Datos e IA",
        subtitle: "Formación y Certificaciones",
        description: "Desarrollo de proyectos en análisis exploratorio de datos e inteligencia artificial aplicada a procesamiento de lenguaje natural y calidad de software.",
        date: "2025",
    },
    {
        id: 3,
        title: "Operador Informático",
        subtitle: "Pronabec – Beca 18 / Consorcio CTK",
        description: "Soporte técnico y aplicación de instrumentos de evaluación del examen nacional de preselección, gestión operativa de sistemas y asistencia tecnológica.",
        date: "12/24",
    },
    {
        id: 4,
        title: "Asesor de Ventas",
        subtitle: "Experiencia Comercial",
        description: "Atención al cliente, asesoría de productos y gestión de relaciones comerciales, fortaleciendo habilidades de comunicación y trato profesional.",
        date: "Exp previa",
    },
];



export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo de Software",
        description: "Desarrollo y mantenimiento de aplicaciones web con buenas prácticas de programación y calidad.",
    },
    {
        icon: <CodeSquare />,
        title: "Full Stack & Backend",
        description: "Implementación de backend y frontend, APIs, lógica de negocio y manejo de bases de datos.",
    },
    {
        icon: <Book />,
        title: "Testing de Software",
        description: "Pruebas funcionales y automatizadas con Selenium y validación de calidad de software.",
    },
    {
        icon: <Rocket />,
        title: "IA y Ciencia de Datos",
        description: "Proyectos en análisis de datos, PLN y modelos de deep learning aplicados a requisitos de software.",
    },
    {
        icon: <Pencil />,
        title: "Documentación Técnica",
        description: "Elaboración de documentación de requisitos, procesos y estándares de calidad de software.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile1.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile1.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile1.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile1.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile1.png",
    },
];