import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import CartWidget from "../src/components/common/cartWidget/CartWidget.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import ItemList from "./components/pages/itemListContainer/ItemList.jsx";
import CartItemList from "./components/pages/Cart/CartItemList.jsx";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element= {<ItemListContainer />} />
            <Route path="/:categoryName"element={<ItemListContainer />}/>
            <Route path="/cart" element={<CartItemList />} />
            </Route>
        </Routes>
        <CartWidget />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
