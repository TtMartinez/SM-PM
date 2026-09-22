import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"
import "./ItemDetail.css"

function ItemDetail({ product }) {
  const { title, category, detail, price, stock, volume, image } = product
  const { addItem, isInCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (quantity) => {
    addItem(product, quantity)
    setAdded(true)
  }

  return (
    <div className="item-detail">
      <div className="detail-image">
        <img src={image} alt={title} />
      </div>

      <div className="detail-info">
        <span className="detail-category">{category}</span>
        <h2 className="detail-title">{title}</h2>
        <p className="detail-volume">Contenido: {volume}</p>
        <p className="detail-description">{detail}</p>
        <p className="detail-price">${price.toLocaleString("es-AR")}</p>
        <p className="detail-stock">Stock disponible: {stock} unidades</p>

        {added || isInCart(product.id) ? (
          <div className="added-confirmation">
            <p>Producto agregado al carrito ✅</p>
            <div className="added-actions">
              <Link to="/cart" className="btn-primary">
                Ir al carrito
              </Link>
              <Link to="/" className="btn-secondary">
                Seguir comprando
              </Link>
            </div>
          </div>
        ) : (
          <ItemCount stock={stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  )
}

export default ItemDetail