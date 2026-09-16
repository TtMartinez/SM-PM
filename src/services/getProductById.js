import { products } from "./products"

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === productId)

      if (product) {
        resolve(product)
      } else {
        reject(new Error("Producto no encontrado"))
      }
    }, 500)
  })
}
