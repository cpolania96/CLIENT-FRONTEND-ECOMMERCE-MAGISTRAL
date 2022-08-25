import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

function UserContextProvider({ children }) {
    const [userData, setUserData] = useState({
        token: null,
        name: null
    })
    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData
            }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider