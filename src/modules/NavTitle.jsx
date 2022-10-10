import React from "react";
import AssetsHandler from "../assets/assetsHandler";

function NavTitle({ title }) {
  return (
    <div className="route">
      <span>Inicio / </span>
      <span className="navpoint">{title}</span>
    </div>
  );
}

export default NavTitle;
