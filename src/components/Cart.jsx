import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./Cart.css"

function Cart() {
  const { cart, removeItem, clear, totalPrice } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>Todavía no agregaste ninguna fragancia. ¡Dale, elegí tu favorita! 💜</p>
        <Link to="/" className="btn-primary">
          Ver catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Tu carrito</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-item-image" />

            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>
                {item.quantity} x ${item.price.toLocaleString("es-AR")}
              </p>
            </div>

            <div className="cart-item-subtotal">
              ${(item.price * item.quantity).toLocaleString("es-AR")}
            </div>

            <button className="cart-item-remove" onClick={() => removeItem(item.id)}>
              Quitar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <button className="btn-secondary" onClick={clear}>
          Vaciar carrito
        </button>

        <div className="cart-total">
          <span>Total</span>
          <strong>${totalPrice.toLocaleString("es-AR")}</strong>
        </div>

                <button className="btn-primary" onClick={() => navigate("/checkout")}>
          Finalizar compra
        </button>
      </div>
    </div>
  )
}

export default Cart