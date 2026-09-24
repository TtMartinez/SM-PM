import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const categories = [
  { name: "Fragancias Mujer", slug: "fragancias-mujer" },
  { name: "Fragancias Hombre", slug: "fragancias-hombre" },
  { name: "Fragancias Unisex", slug: "fragancias-unisex" },
  { name: "Fragancias Ambiente", slug: "fragancias-ambiente" },
]

export const getProducts = async (categorySlug) => {
  const productsRef = collection(db, "products")

  const q = categorySlug
    ? query(productsRef, where("categorySlug", "==", categorySlug))
    : productsRef

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}