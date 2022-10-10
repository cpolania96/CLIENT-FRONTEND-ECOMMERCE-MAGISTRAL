import React from "react";
import { Link } from "react-router-dom";
import AddCart from "../AddCart/AddCart";

function Item({ item }) {

  const { _id, title, price, thumbnail, category } = item;
  return (
    <div className="item" key={_id}>
      <div className="img">
        <img src={thumbnail} alt="" />
      </div>
      <div className="data">
        <ul>
          <li className="category">{category}</li>
          <li className="title">
            <h2>{title}</h2>
          </li>
          <li className="price-info">
            <div className="price">COP ${price.toLocaleString('de-DE')}*</div>
            <div className="info">*IVA INCLUIDO</div>
          </li>
        </ul>
      </div>
      <div className="add-cart-container">
        <AddCart />
      </div>
    </div>
  );
}

export default Item;
