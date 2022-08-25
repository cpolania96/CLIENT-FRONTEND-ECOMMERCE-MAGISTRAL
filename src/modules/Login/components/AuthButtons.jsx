import React from 'react'

function AuthButtons({ setSelected, isSelected }) {

    const btnInfo = [
        {
            id: 1,
            name: 'Iniciar sesión',
            handlerEvent: () => setSelected(true),
        },
        {
            id: 2,
            name: 'Registrarse',
            handlerEvent: () => setSelected(false),
        }
    ]
    console.log(isSelected);

    const setBackgroundBlue = () => {
        if (isSelected) {
            return 'active-btn-auth'
        } else {
            return 'non-active-btn-auth'
        }
    }

    return (
        <ul className="btn-options">
            {btnInfo.map(info => (
                <li key={info.id}
                    className={setBackgroundBlue()}
                >
                    <button
                        onClick={info.handlerEvent}
                        id='login-btn'
                    > {info.name}
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default AuthButtons