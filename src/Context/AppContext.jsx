import React, { createContext, useState } from "react";
import $ from "jquery";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  // Estado que controla la barra de navegacion
  const [blockOverflow, setBlockOverflow] = useState(false);
  // _________________________________________

  // Botón para scroll al inicio
  const btnUp = $("btn-up");
  console.log(btnUp);
  const scrollUp = () => {
    const scroll = window.scrollY;
    if (scroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, scroll - scroll / 15);
    }
  };
  window.onscroll = () => {
    let scroll = window.scrollY;
    console.log(scroll);
    if (scroll < 152) {
        console.log('sisa');
    } else if (scroll > 152) {
      console.log('nona');
    }
  };
  //   _________________________________________

  return (
    <AppContext.Provider
      value={{
        blockOverflow,
        setBlockOverflow,
        scrollUp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
