import React, { useContext } from "react";
import Title from "../../Layout/Title";
import NavTitle from "../../NavTitle";
import BarTools from "./modules/BarTools";
import { AppContext } from "../../../Context/AppContext";
import Item from "./modules/Item/Item";
import { ProductContext } from "../../../Context/ProductContext";

function Store() {
  const { isSelected } = useContext(AppContext);
  const { products } = useContext(ProductContext) || {};
  const { loading } = useContext(AppContext);
  const title = "/tienda";
  console.log(products);
  const renderViewProducts = () => {
    if (isSelected === "1") {
      return (
        <div className="list-products">
          {products.map((item) => (
            loading && 'Cargando',
            <Item item={item} />
          ))}
        </div>
      );
    } else if (isSelected === "2") {
      return (
        <div className="grid-products">
          {products.map((item) => (
            <Item item={item} />
          ))}
        </div>
      );
    }
  };
  return (
    <div className="store">
      <NavTitle title={title} />
      <Title title="TIENDA" />
      <BarTools />
      {renderViewProducts()}
    </div>
  );
}

export default Store;
