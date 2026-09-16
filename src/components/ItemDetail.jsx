import ItemCount from "./ItemCount"
import "./ItemDetail.css"

function ItemDetail({ product }) {
  const { title, category, detail, price, stock, volume, image } = product

  const handleAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidad(es) de ${title} al carrito`)
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

        <ItemCount stock={stock} onAdd={handleAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
