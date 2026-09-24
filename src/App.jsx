import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import Layout from "./components/Layout"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Login from "./components/Login"
import Register from "./components/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import NotFound from "./components/NotFound"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ItemListContainer greeting="Exquisitas fragancias de larga duración y calidad ✨" />
                }
              />
              <Route
                path="category/:categoryId"
                element={<ItemListContainer greeting="Explorá esta categoría" />}
              />
              <Route path="item/:id" element={<ItemDetailContainer />} />
              <Route path="cart" element={<Cart />} />
              <Route
                path="checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App