import { Link } from "react-router-dom"
import "./Item.css"

function Item({ product }) {
  const { id, title, category, description, price, image } = product

  return (
    <Link to={`/item/${id}`} className="item-card">
      <img src={image} alt={title} className="item-image" />
      <span className="item-category">{category}</span>
      <h3 className="item-title">{title}</h3>
      <p className="item-description">{description}</p>
      <span className="item-price">${price.toLocaleString("es-AR")}</span>
    </Link>
  )
}

export default Item
