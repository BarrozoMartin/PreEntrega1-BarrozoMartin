import React from "react";
import "./ItemDetailStyles.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <section>
      <img src={productSelected.img} alt={productSelected.tittle} />

      {productSelected.category === "indumentaria" && (
        <div className="indumentaria">
          <p><h1>{productSelected.description}</h1></p>
          <p>Precio: ${productSelected.price}</p>
          <p>Talle: {productSelected.size}</p>
          <p>Color: {productSelected.color}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(productSelected)}>Comprar</button>
        </div>
      )}
      
      {productSelected.category === "electronica" && (
        <div className="electronica">
          <p><h1>{productSelected.tittle}</h1></p>
          <p>Marca: {productSelected.brand}</p>
          <p>Precio: ${productSelected.price}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(productSelected)}>Comprar</button>
        </div>
      )}

      {productSelected.category === "farmacia" && (
        <div className="farmacia">
          <p><h1>{productSelected.tittle}</h1></p>
          <p>Marca: {productSelected.brand}</p>
          <p>Precio: ${productSelected.price}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(productSelected)}>Comprar</button>
        </div>
      )}

{productSelected.category === "ferreteria" && (
        <div className="ferreteria">
          <p><h1>{productSelected.tittle}</h1></p>
          <p>Marca: {productSelected.brand}</p>
          <p>Precio: ${productSelected.price}</p>
          <p>Detalles: {productSelected.details}</p>
          <button className="btnComprar" onClick={() => onAdd(productSelected)}>Comprar</button>
        </div>
      )}

      {/* Agrega más detalles según sea necesario */}
    </section>
  );
};
