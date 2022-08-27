import React, { useEffect, useState, useRef } from "react";

function InfoContainer() {
  const [isSelected, setIsSelected] = useState(false);
  const [className, setClassName] = useState("");

  return (
    <div className="detail-info">
      <h3>
        <button>
          Descripción
        </button>
        <button>Caracteristicas</button>
      </h3>
      <div className="info-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          reiciendis! Eveniet obcaecati provident sint nemo repellat saepe
          aliquam laudantium recusandae dolorem accusantium, officia magnam
          fugiat ipsum. Vero dignissimos quasi numquam.
        </p>
      </div>
    </div>
  );
}

export default InfoContainer;
