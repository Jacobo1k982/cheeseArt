import { Product } from '@/src/types';

export const products: Product[] = [
    {
        id: 1,
        name: "Queso Ahumado",
        category: "ahumado",
        price: 6000.00,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiHFVBiivboCrtNVrh_5KqbRFdMT3TQr36g&s",
        description: "El queso ahumado hace referencia a aquel queso que es tratado bajo el procedimiento del ahumado. Suele tener una corteza exterior de color marrón amarillento, como resultado del proceso de ahumado.",
        origin: "Artesanal"
    },
    {
        id: 2,
        name: "Queso Hueco",
        category: "fresco",
        price: 6200.00,
        unit: "kg",
        image: "https://www.quesodeovejazacatena.com/wp-content/uploads/queso-agujeros-1.jpg",
        description: "El queso hueco, conocido en inglés como cheese with holes, es un término que se utiliza para describir quesos que tienen agujeros en su interior. Estos agujeros, también conocidos como ojos, son una característica distintiva de varios tipos de quesos, como el queso suizo y el emmental.",
        origin: "Murcia"
    },
    {
        id: 3,
        name: "Queso Maduro",
        category: "azul",
        price: 5500.00,
        unit: "kg",
        image: "https://i0.wp.com/doctorqueso.com/wp-content/uploads/2023/03/maduracion-del-queso.jpg?w=1500&ssl=1",
        description: "El queso maduro es un producto lácteo que se elabora a partir de la leche cuajada y se deja en condiciones específicas para desarrollar su textura, aroma y sabor.",
        origin: "Italia"
    },
    {
        id: 4,
        name: "Queso Mozarella",
        category: "crema",
        price: 7000.00,
        unit: "kg",
        image: "https://italien.expert/wp-content/uploads/2024/05/Mozarella-italienischer-Kaese-Kaese-aus-Italien-4.jpg",
        description: "La mozzarella es un queso semisuave del sur de Italia, elaborado tradicionalmente con leche de búfala italiana mediante el método de la pasta hilada.",
        origin: "Francia"
    },
    {
        id: 5,
        name: "Queso Palmito",
        category: "curado",
        price: 6500.00,
        unit: "kg",
        image: "https://th.bing.com/th/id/OIP.aFrJSgmuFMKAZkWXm6Bv0wHaE8?w=261&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
        description: "El queso Palmito es originario del cantón de Zarcero, en la provincia de Alajuela, en Costa Rica. Pertenece a la familia de los quesos de pasta hilada y se cree que la tecnología para elaborarlo fue desarrollada por inmigrantes italianos. Sus características particulares lo hacen muy apetecido..",
        origin: "País Vasco"
    },
    {
        id: 6,
        name: "Queso Tierno",
        category: "fresco",
        price: 5000.00,
        unit: "kg",
        image: "https://th.bing.com/th/id/OIP.6GpFOJZvo5rH-BWVtSuZSQHaE8?w=264&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
        description: "El queso tierno es un tipo de queso que se caracteriza por su suave textura y cremoso sabor. Su proceso de elaboración incluye cuajar la leche a una temperatura de 35ºC durante 45 minutos, separarla del suero y luego moldearla.",
        origin: "Andalucía"
    },
    {
        id: 7,
        name: "Queso de Especies",
        category: "azul",
        price: 10000.00,
        unit: "kg",
        image: "https://silviadomingo.com/wp-content/uploads/descubre-la-sorprendente-variedad-tipos-de-queso-en-el-mundo-768x512.jpg",
        description: "El queso es un derivado lácteo que se obtiene mediante la maduración de la cuajada de la leche una vez eliminado el suero. Sus diferentes variedades dependen del origen de la leche empleada, de los métodos de elaboración seguidos y del grado de madurez alcanzada..",
        origin: "Francia"
    },
    {
        id: 8,
        name: "Queso Gouda",
        category: "crema",
        price: 10000.00,
        unit: "kg",
        image: "https://info.quesodestrabilla.es/wp-content/uploads/que-tipo-de-queso-es-queso-gouda.webp",
        description: "El queso Gouda es un queso semiduro de forma cilíndrica con la superficie lateral convexa, formando una curva suave que une la superficie plana superior con la inferior.",
        origin: "Artesanal"
    },
    {
        id: 9,
        name: "Queso Cheddar",
        category: "curado",
        price: 11000.00,
        unit: "kg",
        image: "https://i2-prod.irishstar.com/news/us-news/article33115108.ece/ALTERNATES/s1200/1_gettyimages-470427615.jpg",
        description: "El queso cheddar se originó en el pueblo de Cheddar, en el condado de Somerset, Inglaterra, durante el siglo XII.",
        origin: "Italia"
    },
    {
        id: 10,
        name: "Queso Bagaces",
        category: "curado",
        price: 6500.00,
        unit: "kg",
        image: "https://www.tastingtable.com/img/gallery/queso-panela-is-the-mexican-cheese-that-softens-nicely-when-baked/l-intro-1684093858.jpg",
        description: "El queso Bagaces, conocido en Costa Rica como queso seco, es un producto artesanal que se elabora con leche recién ordeñada, a veces incluso leche fermentada o nata.",
        origin: "Italia"
    }
];

export const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'curado', label: 'Curados' },
    { id: 'fresco', label: 'Frescos' },
    { id: 'azul', label: 'Azules' },
    { id: 'crema', label: 'Cremas' },
];