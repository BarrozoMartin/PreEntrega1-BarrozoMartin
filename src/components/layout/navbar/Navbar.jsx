import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <aside>
        <header>
        <Link to="/">
          <img className="logo" src="src\components\assets\img\buhoneroicon.png" alt="" /> 
          </Link>
          <h2>Got some rare things on sale, stranger!</h2>

        </header>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="menu">Todos los productos</Link>
            </li>
            <li>
              <Link to="/electronica" className="menu">Electronica</Link>
            </li>
            <li>
              <Link to="/farmacia" className="menu">Farmacia</Link>
            </li>
            <li>
              <Link to="/ferreteria" className="menu">Ferreteria</Link>
            </li>
            <li>
              <Link to="/indumentaria" className="menu">Indumentaria</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;