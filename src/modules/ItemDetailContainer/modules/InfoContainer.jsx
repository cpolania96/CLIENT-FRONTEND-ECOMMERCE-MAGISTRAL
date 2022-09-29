import React, { useEffect, useState, useRef } from "react";

function InfoContainer({ description }) {
  const [isSelected, setIsSelected] = useState(false);
  const [className, setClassName] = useState("");

  return (
    <div className="detail-info">
      <h3>
        <button>Descripción</button>
        <button>Caracteristicas</button>
      </h3>
      <div className="info-container">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InfoContainer;
