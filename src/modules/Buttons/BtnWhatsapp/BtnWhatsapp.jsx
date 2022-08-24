import React from "react";
import AssetsHandler from "../../../assets/assetsHandler.jsx"

function BtnWhatsapp() {
    const sources = AssetsHandler()
    const logoWhatsapp = sources.icon.icons.Whatsapp
    return (
    <div className="btn-whatsapp">
      <button>
        {logoWhatsapp}
      </button>
    </div>
  );
}

export default BtnWhatsapp;
