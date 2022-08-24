import React, { useContext } from "react";
import AssetsHandler from "../../../assets/assetsHandler";
import { AppContext } from "../../../Context/AppContext";

function BtnUp() {
  const sources = AssetsHandler();
  const ico = sources.icon.icons.Arrow;
  const { scrollUp } = useContext(AppContext);
  return (
    <div className="btn-up" id="btn-up">
      <button onClick={() => scrollUp()}>{ico}</button>
    </div>
  );
}

export default BtnUp;
