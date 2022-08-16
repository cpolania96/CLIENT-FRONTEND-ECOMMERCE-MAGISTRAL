import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppContextProvider({children}) {
    const [clicked, setClicked] = useState(false)
    return (
        <AppContext.Provider
            value={{
                clicked,
                setClicked
            }}>
            {children}
        </AppContext.Provider>
    )
}


