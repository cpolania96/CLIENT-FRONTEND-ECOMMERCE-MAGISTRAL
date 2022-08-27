import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

function MenuNav() {
  const { menuItems } = useContext(AppContext);
  return (
    <div className="menu-nav-desktop">
      <ul>
        {menuItems.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default MenuNav;
