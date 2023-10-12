import React from "react";
import "./ItemDetailStyles.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <section>
      <img src={productSelected.img} alt={productSelected.tittle} />

      {productSelected.category === "indumentaria" && (
        <div className="indumentaria">
          <p><h3>{productSelected.description}</h3></p>
          <p>Precio: ${productSelected.price}</p>
          <p>Talle: {productSelected.size}</p>
          <p>Color: {productSelected.color}</p>
          <button className="btnComprar" onClick={() => onAdd(productSelected)}>Comprar</button>
        </div>
      )}
      
      {productSelected.category === "electronica" && (
        <div className="electronica">
          <p><h1>{productSelected.tittle}</h1></p>
          <p>Precio: ${productSelected.price}</p>
          <p>Marca: {productSelected.brand}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(productSelected)}>Comprar</button>
        </div>
      )}

      {productSelected.category === "farmacia" && (
        <div className="farmacia">
          <p>Precio: ${productSelected.price}</p>
          <p>Uso: {productSelected.use}</p>
          <p>Ingredientes: {productSelected.ingredients}</p>
          <button className="btnComprar" onClick={() => onAdd(productSelected)}>Comprar</button>
        </div>
      )}

      {/* Agrega más detalles según sea necesario */}
    </section>
  );
};
