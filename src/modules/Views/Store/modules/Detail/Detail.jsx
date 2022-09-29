import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../../../Context/ProductContext";
// import { useContext } from 'react'
// import { CartContext } from '../../Context/cartContext'
import ItemCount from "../../../../ItemCount/ItemCount";
import InfoContainer from "../../../../ItemDetailContainer/modules/InfoContainer";
import NavTitle from "../../../../NavTitle";
import AddCart from "../AddCart/AddCart";
// import IconStar from '../../assets/svg/IconStar'

function Detail() {

  const {setId, product} = useContext(ProductContext) || {}
  const { _id, title, description, price, thumbnail } = product;
  let id = useParams()
  let params = id.id

  useEffect(()=> {
    setId(params)
  },[])
  const stringToLowerCase = () => {
    if(title !== undefined) {
      return title.toLowerCase()
    }
  }
  const titleNav = `/tienda/productos/${stringToLowerCase()}`

  
  return (
    <div className="detail">
      <NavTitle title={titleNav}/>
      <div className="title">{title}</div>
      <div className="photo">
        <img src={thumbnail} alt="" />
      </div>
      <div className="info">
        <div className="rows r1"></div>
        <div className="rows r2">
          <h6>Marca: Magistral</h6>
          <h6>SKU: {_id}</h6>
        </div>
        <div className="rows r3">
          <div className="container-star"></div>
          <div className="rate"></div>
        </div>
        <div className="rows r4">
          <h6 className="price">COP ${price}</h6>
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
          <AddCart />
        </div>
        <div className="rows r6">
          <div className="label">
            Con esta compra sumas 35 puntos Magistral{" "}
          </div>
          <button>más info</button>
        </div>
        <InfoContainer description={description}/>
      </div>
    </div>
  );
}

export default Detail;
