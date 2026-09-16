# SM | Pamela Martin

E-commerce de perfumería desarrollado con React. Proyecto final del curso de React.

**#AromasQueAlegranTuDia** — Exquisitas fragancias de larga duración y calidad.

## Tecnologías utilizadas

- React 19
- Vite
- React Router DOM
- JavaScript
- CSS

## Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TtMartinez/SM-PM.git
   ```
2. Ingresar a la carpeta del proyecto:
   ```bash
   cd SM-PM
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del proyecto

```
SM-PM/
├── public/
├── src/
│   ├── components/
│   │   ├── CartWidget.jsx
│   │   ├── Footer.jsx
│   │   ├── Item.jsx
│   │   ├── ItemCount.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   ├── getProductById.js
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Estado del proyecto

- Módulo 1: estructura base con Vite.
- Módulo 2: Navbar, CartWidget e ItemListContainer con props.
- Módulo 3: simulación de API asíncrona, ItemList e Item.
- Módulo 4: getProductById, ItemDetailContainer, ItemDetail e ItemCount.
- Módulo 5: navegación con React Router (rutas por categoría, detalle de producto, layout persistente y página 404).

Pendiente: estado global del carrito con Context API y conexión con Firebase.
