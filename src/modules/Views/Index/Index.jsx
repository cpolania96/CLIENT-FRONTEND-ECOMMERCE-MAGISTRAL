import React from "react";
import ContentContainer from "../../Layout/ContentContainer";
import CardsOpinion from "../../CardOpinion/CardsOpinion";
import BtnWhatsapp from "../../Buttons/BtnWhatsapp/BtnWhatsapp";
import BtnUp from "../../Buttons/BtnUp/BtnUp";
import Carousell from "../../Carousell/Carousell";
import BuyInfo from "../../BuyInfo/BuyInfo";
import ContainerProducts from "../../ContainerProducts/ContainerProducts";
import AssetsHandler from "../../../assets/assetsHandler";

function Index() {
  const sources = AssetsHandler();

  const assets = {
    nails: "https://res.cloudinary.com/devsy44f3/image/upload/v1660111956/Products/Ecommerce-Magistral/img/Captura_de_pantalla_2022-08-10_011125_jhoqle.png",
  icon: {
    hair: sources.icon.icons.HairCare,
    nail: sources.icon.icons.NailCare,
    skin: sources.icon.icons.SkinCare
  }
    };
  const bannerIcons = [
    {
      id: 1,
      title: "Compras seguras",
      ico: sources.icon.icons.Secure,
    },
    {
      id: 2,
      title: "Envios gratis*",
      ico: sources.icon.icons.Delivery,
    },
    {
      id: 3,
      title: "Paga cuando recibas",
      ico: sources.icon.icons.Wallet,
    },
  ];
  const infoCards = [
    {
      id: 1,
      img: "https://res.cloudinary.com/devsy44f3/image/upload/v1660120416/Products/Ecommerce-Magistral/img/Recurso_1_10_nfnjju.png",
      ico: sources.icon.icons.Check,
      title: "ENDURECEDOR DE UÑAS",
      weight: 12,
      um: "ml",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/devsy44f3/image/upload/v1660120430/Products/Ecommerce-Magistral/img/Recurso_tyjj6u1_1_fzzrgk.png",
      title: "ACEITE VITAMÍNICO",
      weight: 12,
      um: "ml",
    },
  ];

  return (
    <ContentContainer>
      {/* CAROUSEL */}
      <Carousell />
      {/* SALUDO DE BIENVENIDA */}
      <div className="subtitle">
        <h2>
          ¡Bienvenida a tu tienda favorita de productos para el cuidado
          corporal!
        </h2>
      </div>
      {/* BANNER DE INFORMACION */}
      <div className="banner-icons">
        <ul>
          {bannerIcons.map((item) => (
            <li key={item.id}>
              {item.ico}
              <h2>{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
      {/* BANNER DE FOTO DE UÑAS */}
      <div className="nails-banner">
        <img src={assets.nails} alt="" />
      </div>
      {/* INFO DE CÓMO COMPRAR */}
      <BuyInfo />
      {/* CONTAINERS DE PRODUCTOS */}
      <ContainerProducts icon={assets.icon.nail} info={infoCards} title={"Rutina para el cuidado de uñas"}/>
      <ContainerProducts icon={assets.icon.skin} info={infoCards} title={"Rutina para el cuidado facial"}/>
      <ContainerProducts icon={assets.icon.hair} info={infoCards} title={"Rutina para el cuidado capilar"}/>
      {/* TESTIMONIOS */}
     <CardsOpinion />
      <BtnWhatsapp />
      <BtnUp />
    </ContentContainer>
  );
}

export default Index;
