import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getProductById } from "../services/getProductById"

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    getProductById(id)
      .then((result) => setProduct(result))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="loading-message">Cargando producto...</p>
  if (error) return <p className="loading-message">{error}</p>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer