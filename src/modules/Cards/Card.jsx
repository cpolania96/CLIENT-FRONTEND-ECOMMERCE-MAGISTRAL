import React from "react";
import AssetsHandler from "../../assets/assetsHandler";
import AddCart from "../Views/Store/modules/AddCart/AddCart";
function Card({ item }) {
  const sources = AssetsHandler();
  return (
    <li className="info-cards">
      <div className="img">
        <img src={item.img} />
      </div>
      <div className="description">
        <h2>Cuidado de uñas</h2>
        <h3>{item.title}</h3>
        <div className="price-container">
          <div className="content">{item.weight} ml</div>
          <div className="price-info">$40.000</div>
        </div>
        <div className="button-add">
          <AddCart />
        </div>
      </div>
    </li>
  );
}

export default Card;
