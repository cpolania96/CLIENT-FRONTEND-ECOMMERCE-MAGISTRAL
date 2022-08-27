import React from "react";
import AssetsHandler from "../../assets/assetsHandler";
// import { useContext } from 'react'
// import { CartContext } from '../../Context/cartContext'
import ItemCount from "../ItemCount/ItemCount";
import InfoContainer from "../ItemDetailContainer/modules/InfoContainer";
// import IconStar from '../../assets/svg/IconStar'

function Detail() {
  // const { agregarAlCarrito } = useContext(CartContext)

  // const onAdd = (cant) => {
  //     agregarAlCarrito({ ...prod, cantidad: cant })
  // }

  const img =
    "https://res.cloudinary.com/devsy44f3/image/upload/v1653280406/Products/pixlr-bg-result_3_eba6t1.png";
  const assets = AssetsHandler();
  const sources = {
    home: assets.icon.icons.Home,
  };
  return (
    <div className="detail">
      <div className="route">
        <span>{sources.home}</span>/productos/esmalte endurecedor de uñas
      </div>
      <div className="title">ESMALTE ENDURECEDOR DE UÑAS</div>
      <div className="photo">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <div className="rows r1"></div>
        <div className="rows r2">
          <h6>Marca: Don Bigotes</h6>
          <h6>SKU: THUJUJTUCERF</h6>
        </div>
        <div className="rows r3">
          <div className="container-star"></div>
          <div className="rate"></div>
        </div>
        <div className="rows r4">
          <h6 className="price">$35.555</h6>
          <h6 className="label">IVA incluido*</h6>
        </div>
        <div className="rows r5">
          <h5>Selecciona la referencia que deseas: </h5>
          <div className="container-button">
            <button>500ml</button>
          </div>
          <h6>Stock: Disponible</h6>
        </div>
        <div className="rows r7">
          <ItemCount buttonLabel="Agregar al carrito" />
        </div>
        <div className="rows r6">
          <div className="label">
            Con esta compra sumas 35 puntos Magistral{" "}
          </div>
          <button>más info</button>
        </div>
        <InfoContainer />
      </div>
    </div>
  );
}

export default Detail;
