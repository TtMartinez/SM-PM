import { useState } from "react"
import "./ItemCount.css"

function ItemCount({ stock, initial = 1, onAdd }) {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button onClick={decrement} disabled={quantity <= 1}>
          -
        </button>
        <span className="counter-value">{quantity}</span>
        <button onClick={increment} disabled={quantity >= stock}>
          +
        </button>
      </div>

      <button className="add-to-cart" onClick={() => onAdd(quantity)} disabled={stock === 0}>
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  )
}

export default ItemCount
