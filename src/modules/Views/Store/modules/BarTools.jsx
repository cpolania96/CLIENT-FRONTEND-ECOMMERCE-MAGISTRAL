import React from "react";
import AssetsHandler from "../../../../assets/assetsHandler";

function BarTools() {
    const assets = AssetsHandler()
    const sources = {
        filter: assets.icon.icons.Filter,
        sort: assets.icon.icons.Sort
    }
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
      <div className="btn-views">2</div>
    </div>
  );
}

export default BarTools;
