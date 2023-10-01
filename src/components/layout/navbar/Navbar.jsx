import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      <aside className="aside">
        <header>
          <h1 className="logo">Buhonero</h1>
          <h2>Got some rare things on sale, stranger!</h2>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <button id="todos" className="boton-menu">
                Todos los productos
              </button>
            </li>
            <button id="electronica" className="boton-menu">
              Electronica
            </button>
            <li>
              <button id="farmacia" className="boton-menu">
                Farmacia
              </button>
            </li>
            <li>
              <button id="ferreteria" className="boton-menu">
                Ferreteria
              </button>
            </li>
            <li>
              <button id="indumentaria" className="boton-menu">
                Indumentaria
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;

