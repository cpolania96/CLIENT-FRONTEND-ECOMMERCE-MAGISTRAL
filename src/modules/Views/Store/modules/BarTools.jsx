import React, { useContext, useState } from "react";
import AssetsHandler from "../../../../assets/assetsHandler";
import { AppContext } from "../../../../Context/AppContext";

function BarTools() {
  //   Botones de vistas de productos
  const { isSelected, setIsSelected } = useContext(AppContext);
  const setSelect = () => {
    if (isSelected === "1") {
      return "btn1-is-active";
    } else if (isSelected === "2") {
      return "btn2-is-active";
    }
  };
  let selected = setSelect();
  // ____________________________________

  // Recursos del módulo
  const assets = AssetsHandler();
  const sources = {
    filter: assets.icon.icons.Filter,
    sort: assets.icon.icons.Sort,
    list: assets.icon.icons.List,
    grid: assets.icon.icons.Grid,
  };
  // ____________________________________

  return (
    <div className="bartools">
      <div className="tools">
        <div className="filter">
          <span>{sources.filter}</span>
          <h3>Filtro</h3>
        </div>
        <div className="sort">
          <span>{sources.sort}</span>
          <h3>Ordenar por</h3>
        </div>
      </div>
      <div className={`btn-views ${selected}`}>
        <button className="btn-grid" onClick={() => setIsSelected("1")}>
          {sources.grid}
        </button>
        <button className="btn-list" onClick={() => setIsSelected("2")}>
          {sources.list}
        </button>
      </div>
    </div>
  );
}

export default BarTools;
