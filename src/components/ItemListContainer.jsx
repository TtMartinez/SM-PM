import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProducts } from "../services/products"
import "./ItemListContainer.css"

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    getProducts(categoryId)
      .then((products) => setItems(products))
      .catch(() => setError("No se pudieron cargar los productos."))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      {loading ? (
        <p className="loading-message">Cargando productos...</p>
      ) : error ? (
        <p className="loading-message">{error}</p>
      ) : items.length === 0 ? (
        <p className="loading-message">No hay productos en esta categoría.</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  )
}

export default ItemListContainer