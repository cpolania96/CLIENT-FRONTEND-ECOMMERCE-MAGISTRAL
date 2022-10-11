import React, { useContext } from "react";
import Title from "../../Layout/Title";
import NavTitle from "../../NavTitle";
import BarTools from "./modules/BarTools";
import { AppContext } from "../../../Context/AppContext";
import Item from "./modules/Item/Item";
import { ProductContext } from "../../../Context/ProductContext";
import AssetsHandler from "../../../assets/assetsHandler";

function Store() {
  const { isSelected } = useContext(AppContext);
  const { products } = useContext(ProductContext) || {};
  const { loading } = useContext(AppContext);
  const title = "Tienda";
  const renderViewProducts = () => {
    if (isSelected === "2") {
      return (
        <div className="list-products">
          {products.map(
            (item) => (loading && "Cargando", (<Item item={item} />))
          )}
        </div>
      );
    } else if (isSelected === "1") {
      return (
        <div className="grid-products">
          {products.map((item) => (
            <Item item={item} />
          ))}
        </div>
      );
    }
  };
  const photo =
    "https://res.cloudinary.com/devsy44f3/image/upload/v1665363913/Products/Ecommerce-Magistral/img/iStock-1061703286-1024x739-removebg-preview_f9ykhw.png";
  const message = "¡Los mejores productos para el cuidado corporal aqui!";
  const assets = AssetsHandler();
  const ico = assets.icon.icons.Arroba;
  return (
    <div className="store">
      <NavTitle title={title} />
      <Title title="TIENDA" />
      <div className="banner-store">
        <img src={photo} alt="" />
        <p className="message">{message}</p>
        <button>Ver más...</button>
      </div>
      <div className="container-categories">
        <button name="Categorias">Categorias</button>
      </div>
      <BarTools />
      <div className="container-store">
        <div className="category-routes"></div>
        {renderViewProducts()}
      </div>
    </div>
  );
}

export default Store;
