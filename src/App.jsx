import "./App.css";
import Header from "./modules/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./modules/Views/Index";
import Footer from "./modules/Footer/Footer";
import { AppContext } from "./Context/AppContext";
import { useContext, useRef } from "react";
import Store from "./modules/Views/Store/Store";
import Blog from "./modules/Views/Blog";
import Contact from "./modules/Views/Contact";
import Legal from "./modules/Views/Legal";
import AuthView from "./modules/Login/AuthView";
import Cart from "./modules/Views/Cart";
import Checkout from "./modules/Views/Checkout";
import Detail from "./modules/Views/Detail";

function App() {
  // Imports de contexto

  const { blockOverflow, btnScrollUp } = useContext(AppContext) || {};

  // _________________________________________
  // Bloquear scroll cuando se despliega el menu o la barra de navegación

  const setOverflowHidden = () => {
    if (blockOverflow) {
      return "menu-open";
    }
  };
  let isClicked = setOverflowHidden();

  // _________________________________________


  
  return (
    <div className={`App ${isClicked}`} id="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/tienda" element={<Store />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/legal" element={<Legal />} />
          <Route exact path="/auth" element={<AuthView />} />
          <Route exact path="/carrito" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/detail" element={<Detail />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
