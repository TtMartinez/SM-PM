import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"
import "./Checkout.css"

function Checkout() {
  const { user } = useAuth()
  const { cart, totalPrice, clear } = useCart()
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleConfirm = async () => {
    setLoading(true)
    setError(null)

    try {
      const order = {
        buyer: {
          email: user.email,
          uid: user.uid,
        },
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        })),
        total: totalPrice,
        createdAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "orders"), order)
      setOrderId(docRef.id)
      clear()
    } catch {
      setError("No se pudo generar la orden. Intentá de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div className="checkout-confirmation">
        <h2>¡Compra confirmada! 🎉</h2>
        <p>Tu número de orden es:</p>
        <p className="order-id">{orderId}</p>
        <Link to="/" className="btn-primary">
          Volver al catálogo
        </Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />
  }

  return (
    <div className="checkout">
      <h2>Confirmar compra</h2>
      <p>Comprando como: {user.email}</p>

      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>
              {item.quantity} x {item.title}
            </span>
            <span>${(item.price * item.quantity).toLocaleString("es-AR")}</span>
          </div>
        ))}
      </div>

      <div className="checkout-total">
        <span>Total</span>
        <strong>${totalPrice.toLocaleString("es-AR")}</strong>
      </div>

      {error && <p className="auth-error">{error}</p>}

      <button className="btn-primary" onClick={handleConfirm} disabled={loading}>
        {loading ? "Generando orden..." : "Confirmar compra"}
      </button>
    </div>
  )
}

export default Checkout