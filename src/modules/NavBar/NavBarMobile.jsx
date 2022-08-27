import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AssetsHandler from "../../assets/assetsHandler";
import { AppContext } from "../../Context/AppContext";
function NavBarMobile({ isVisible, setVisible, setBlockOverflow }) {
  const sources = AssetsHandler();
  const assets = {
    arrow: sources.icon.icons.Arrow,
    enter: sources.icon.icons.Enter,
  };

  const { menuItems } = useContext(AppContext);

  const menuList = menuItems.map((item) => (
    <li key={item.id}>
      <Link
        to={item.link}
        onClick={() => {
          setVisible(false);
          setBlockOverflow(false);
        }}
      >
        <h2>{item.name}</h2>
        <span>{assets.arrow}</span>
      </Link>
    </li>
  ));
  return (
    <>
      <div
        className={`navbar-mobile ${isVisible ? `isActive` : `isNonActive`}`}
      >
        <nav>
          <div className="btn-close">
            <button
              onClick={() => {
                setVisible(false);
                setBlockOverflow(false);
              }}
            >
              X
            </button>
          </div>
          <menu>
            <div className="login">
              <Link
                to="/auth"
                onClick={() => {
                  setVisible(false);
                  setBlockOverflow(false);
                }}
              >
                <span>{assets.enter}</span>
                <h2>Ingresar</h2>
              </Link>
            </div>
            <ul>{menuList}</ul>
          </menu>
        </nav>
      </div>
    </>
  );
}

export default NavBarMobile;
