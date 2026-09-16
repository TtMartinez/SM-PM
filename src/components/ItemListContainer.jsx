import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProducts } from "../services/products"
import "./ItemListContainer.css"

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const fetchProducts = async () => {
      const products = await getProducts()
      const filtered = categoryId
        ? products.filter((product) => product.categorySlug === categoryId)
        : products
      setItems(filtered)
      setLoading(false)
    }

    fetchProducts()
  }, [categoryId])

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      {loading ? (
        <p className="loading-message">Cargando productos...</p>
      ) : items.length === 0 ? (
        <p className="loading-message">No hay productos en esta categoría.</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  )
}

export default ItemListContainer
