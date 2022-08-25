import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext([])

function AuthContextProvider({ children }) {

  const [isLogout, setIsLogout] = useState(false)
  const history = useNavigate()

  const cerrarSesion = () => {
    if (isLogout === true) {
      localStorage.clear()
      setTimeout(() => {
        return history('/')
      }, 2000)
    }
  }
  useEffect(()=> {
    cerrarSesion()
  }, [isLogout])

  return (
    <>

      <AuthContext.Provider
        value={{
          cerrarSesion,
          setIsLogout
        }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthContextProvider

