import React from "react"
import AssetsHandler from "../../assets/assetsHandler"
import Title from "../Layout/Title"
function BuyInfo() {
  const assets = AssetsHandler()
  const sources = {
    ico1: assets.icon.buybanner.Ico1,
    ico2: assets.icon.buybanner.Ico2,
    ico3: assets.icon.buybanner.Ico3,
    ico4: assets.icon.buybanner.Ico4,
  }
  const icoInfo = [
    {
      id: "IC-01",
      title: "Escoge los productos",
      ico: sources.ico1,
    },
    {
      id: "IC-02",
      title: "Agrégalo al carrito",
      ico: sources.ico2,
    },
    {
      id: "IC-03",
      title: "Finaliza tu compra en el carrito",
      ico: sources.ico3,
    },
    {
      id: "IC-04",
      title: "Recibe tu pedido al día siguiente",
      ico: sources.ico4,
    },
  ]
  return (
    <>
      <Title title={"Cómo hacer tu compra"} />
      <div className="container-content buy-container">
        <ul className="buy-info">
          {icoInfo.map((item) => (
            <li key={item.id}>
              <button>
                <div className="ico">{item.ico}</div>
                <div className="info">{item.title}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BuyInfo
