import { seedProducts } from "../firebase/seedProducts"

function SeedButton() {
  const handleSeed = async () => {
    await seedProducts()
    alert("Productos cargados. Revisá la consola de Firestore.")
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <button onClick={handleSeed} className="btn-primary">
        Cargar productos de ejemplo en Firestore
      </button>
      <p style={{ fontSize: "0.8rem", color: "#888", marginTop: "0.5rem" }}>
        Usar una sola vez. Después borrar esta ruta y este componente.
      </p>
    </div>
  )
}

export default SeedButton