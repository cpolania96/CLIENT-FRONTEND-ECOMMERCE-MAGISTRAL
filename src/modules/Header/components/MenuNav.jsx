import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import { Link } from "react-router-dom";

function MenuNav() {
  const { menuItems } = useContext(AppContext);
  return (
    <div className="menu-nav-desktop">
      <ul>
        {menuItems.map((item) => {
          return (
            <li>
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuNav;
