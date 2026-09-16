export const categories = [
  { name: "Fragancias Mujer", slug: "fragancias-mujer" },
  { name: "Fragancias Hombre", slug: "fragancias-hombre" },
  { name: "Fragancias Unisex", slug: "fragancias-unisex" },
  { name: "Fragancias Ambiente", slug: "fragancias-ambiente" },
]

export const products = [
  {
    id: 1,
    title: "Bloom Élite",
    category: "Fragancias Mujer",
    categorySlug: "fragancias-mujer",
    description: "Fragancia floral de larga duración con notas de jazmín y vainilla.",
    detail:
      "Eau de parfum de alta concentración. Sus notas de salida cítricas dan paso a un corazón floral de jazmín y peonía, cerrando con un fondo cálido de vainilla y almizcle. Duración aproximada de 8 horas.",
    price: 15900,
    stock: 10,
    volume: "100 ml",
    image: "https://placehold.co/400x400/2b1b3d/fff?text=Bloom+Elite",
  },
  {
    id: 2,
    title: "Noir Intense",
    category: "Fragancias Hombre",
    categorySlug: "fragancias-hombre",
    description: "Perfume masculino amaderado con toques de cuero y pimienta negra.",
    detail:
      "Fragancia intensa pensada para la noche. Combina pimienta negra y bergamota en la salida, con un fondo profundo de cuero, sándalo y vetiver. Alta fijación en la piel.",
    price: 17400,
    stock: 7,
    volume: "100 ml",
    image: "https://placehold.co/400x400/2b1b3d/fff?text=Noir+Intense",
  },
  {
    id: 3,
    title: "Aqua Pura",
    category: "Fragancias Unisex",
    categorySlug: "fragancias-unisex",
    description: "Aroma fresco y cítrico ideal para el uso diario, unisex.",
    detail:
      "Fragancia ligera y versátil. Notas de limón, menta y bergamota sobre un fondo limpio de almizcle blanco. Ideal para el día y para climas cálidos.",
    price: 13200,
    stock: 15,
    volume: "90 ml",
    image: "https://placehold.co/400x400/2b1b3d/fff?text=Aqua+Pura",
  },
  {
    id: 4,
    title: "Velvet Rose",
    category: "Fragancias Mujer",
    categorySlug: "fragancias-mujer",
    description: "Notas dulces de rosa y almizcle en un frasco de larga duración.",
    detail:
      "Un clásico floral reinterpretado. Rosa búlgara y frutos rojos en la salida, corazón de peonía y fondo de almizcle y ámbar. Elegante y con gran presencia.",
    price: 16800,
    stock: 5,
    volume: "100 ml",
    image: "https://placehold.co/400x400/2b1b3d/fff?text=Velvet+Rose",
  },
  {
    id: 5,
    title: "Brisa de Hogar",
    category: "Fragancias Ambiente",
    categorySlug: "fragancias-ambiente",
    description: "Difusor de ambiente con aroma a lavanda y madera de cedro.",
    detail:
      "Difusor con varillas de ratán que perfuma ambientes de hasta 30 m². Mezcla de lavanda, cedro y un fondo suave de vainilla. Duración aproximada de 3 meses de uso continuo.",
    price: 9900,
    stock: 12,
    volume: "250 ml",
    image: "https://placehold.co/400x400/2b1b3d/fff?text=Brisa+de+Hogar",
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}
