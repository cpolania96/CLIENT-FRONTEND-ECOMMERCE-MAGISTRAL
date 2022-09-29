import React from "react";
import AssetsHandler from "../../assets/assetsHandler";
import Card from "../Cards/Card";
import Title from "../Layout/Title";

function ContainerProducts({ info, title, icon }) {
  const assets = AssetsHandler()
  const sources = {
    arrow: assets.icon.icons.Arrow
  }
  const Icon = icon
  return (
    <>
      <div className="container-title">
        {Icon}
        <Title title={title} />
      </div>
      <div className="container-content products-container">
        <ul className="offers">
          {info.map((item) => (
            <Card item={item} />
          ))}
        </ul>
        <div className="buttons">
          <button>{sources.arrow}</button>
          <button>{sources.arrow}</button>
        </div>
      </div>
    </>
  );
}

export default ContainerProducts;
