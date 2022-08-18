import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppContextProvider({children}) {

    // Estado que controla la barra de navegacion
    const [blockOverflow, setBlockOverflow] = useState(false)
    // _________________________________________

    return (
        <AppContext.Provider
            value={{
                blockOverflow,
                setBlockOverflow
            }}>
            {children}
        </AppContext.Provider>
    )
}


