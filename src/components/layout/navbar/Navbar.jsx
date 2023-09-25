//import CartWidget from "../../common/cartWidget/CartWidget";
{/*import "./Navbar.css";

export const Navbar = () => {
  return (
    <div classNameName={"containerNavbar"}>
      <h1>Comision 47225</h1>
      <ul classNameName="categories">
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
    <CartWidget />
    </div>*/}
  //);
//};
import "./navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import ItemListContainer from "../../pages/itemListContainer/ItemListContainer";

export const Navbar = () => {
  let saludo = "Hola Coder cuantos años tenes?";
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
          <main>
            <ItemListContainer saludo={saludo} edad={21} />
          </main>
        </aside>
      </>
    </div>
  );
};
