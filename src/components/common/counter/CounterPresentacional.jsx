import React from "react";
import "./CounterStyles.css";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <button className="btnSum" onClick={sumar}>+</button>
      <h4> {contador} </h4>
      <button className="btnRes" onClick={restar}>-</button>
      <button className="btnAdd" onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default CounterPresentacional;
