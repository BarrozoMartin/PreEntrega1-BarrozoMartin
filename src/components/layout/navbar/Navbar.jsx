
import "./navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <>
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
                <CartWidget />
            </ul>
          </nav>
        </aside>
        <footer>
              <p class="texto-footer">&copy; 2023 Buhonero. Todos los derechos reservados.</p>
              <p class="texto-footer">Whatever you want, Whenever you want it, You have it</p>
        </footer>
      </>
    </div>
  );
};
