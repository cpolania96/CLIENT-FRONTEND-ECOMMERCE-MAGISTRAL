import React, { useContext } from 'react'
import useUser from '../../Hooks/useUser'

function Logout() {
    const { logout } = useUser()
    return (
        <button
            className='btn-logout'
            onClick={logout}>
            Cerrar Sesión
        </button>
    )
}

export default Logout