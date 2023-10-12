import React, { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ product }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      alert("Cantidad máxima alcanzada");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <CounterPresentacional sumar={sumar} restar={restar} contador={contador} />
  );
};

export default CounterContainer;
