import React from "react";
import AssetsHandler from "../../assets/assetsHandler";
import Title from "../Layout/Title";
import CardOpinion from "./modules/CardOpinion";

function CardsOpinion() {
  const sources = AssetsHandler();
  const cardsInfo = [
    {
      id: "CO-001",
      name: "Isabel García",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis nulla, aspernatur illum molestias",
      img: "https://res.cloudinary.com/devsy44f3/image/upload/v1664512354/Products/People%20images/3_bzcrwb.png",
    },
    {
      id: "CO-002",
      name: "Maria Garzón",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis nulla, aspernatur illum molestias",
      img: "https://res.cloudinary.com/devsy44f3/image/upload/v1664512354/Products/People%20images/3_bzcrwb.png",
    },
    {
      id: "CO-003",
      name: "Fernanda Perez",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis nulla, aspernatur illum molestias",
      img: "https://res.cloudinary.com/devsy44f3/image/upload/v1664512282/Products/People%20images/2_k2kwic.png",
    },
    {
      id: "CO-004",
      name: "Gabriela Rosas",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis nulla, aspernatur illum molestias",
      img: "https://res.cloudinary.com/devsy44f3/image/upload/v1664512000/Products/People%20images/1_sra5dn.png",
    },
  ];
  return (
    <div className="cards-opinion">
      <Title
        title={`Nuestras clientas nos prefieren. Muchos casos de éxito alrededor de Colombia`}
      />
      <div className="container-content">
        <ul className="card-opinion">
          {cardsInfo.map((item) => (
            <CardOpinion sources={sources} info={item} />
          ))}
        </ul>
        <div className="btn-seemore">
          <button>Descubir más</button>
        </div>
      </div>
    </div>
  );
}

export default CardsOpinion;
