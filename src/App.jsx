import React from "react";
import Navbar from "../src/components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import CartWidget from "../src/components/common/cartWidget/CartWidget.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";


function App() {
  return (
    <>
      <ItemListContainer />
      <Navbar />
      <CartWidget />
      <Footer />

    </>
  )
}

export default App;
