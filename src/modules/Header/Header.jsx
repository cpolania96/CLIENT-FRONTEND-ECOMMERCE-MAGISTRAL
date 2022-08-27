import React, { useEffect, useState, useContext } from "react";
import AssetsHandler from "../../assets/assetsHandler";
import { Link } from "react-router-dom";
import NavBarMobile from "../NavBar/NavBarMobile";
import SearchBar from "./components/SearchBar/SearchBar";
import { AppContext } from "../../Context/AppContext";
import MenuNav from "./components/MenuNav";

function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { setBlockOverflow } = useContext(AppContext) || {};

  const sources = AssetsHandler();
  const newsBanner = {
    text: "TU PRIMERA COMPRA CON BONO DE DESCUENTO DEL 10%",
  };
  const { icon } = sources;
  const assets = {
    logo: icon.indentity.logo,
    menu: icon.icons.Menu,
    search: icon.icons.Search,
    user: icon.icons.User,
    shopbag: icon.icons.ShopBag,
  };

  const setNavOpen = (bool) => {
    setMenuIsVisible(bool);
    setBlockOverflow(bool);
  };

  return (
    <>
      <div className="news-banner">
        <p className="news-title">{newsBanner.text}</p>
      </div>
      <header>
        <div className="header-container">
          <button className="header-close" onClick={() => setNavOpen(true)}>
            {assets.menu}
          </button>
          <SearchBar assets={assets} />
          <Link to="/">
            <div className="logo">{assets.logo}</div>
          </Link>
          <button className="user">{assets.user}</button>
          <button className="shopbag">{assets.shopbag}</button>
        </div>
        <NavBarMobile
          isVisible={menuIsVisible}
          setVisible={setMenuIsVisible}
          setBlockOverflow={setBlockOverflow}
        />
        <MenuNav />
      </header>
    </>
  );
}

export default Header;
