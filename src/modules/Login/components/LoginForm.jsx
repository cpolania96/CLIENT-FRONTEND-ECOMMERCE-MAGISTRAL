import React from 'react'
import AssetsHandler from '../../../assets/assetsHandler'

function LoginForm({ handlerChange, handlerSubmit }) {
    const sources = AssetsHandler()
    const assets = {
        email: sources.icon.icons.Arroba,
        google: sources.icon.icons.Google,
        password: sources.icon.icons.Password
    }
    return (
        <>
            <form
                action=""
                onSubmit={handlerSubmit}
                className="signin">
                <ul>
                    <li className='input email'>
                        <span>
                            {assets.email}
                        </span>
                        <input
                            type="text"
                            name='email'
                            onChange={handlerChange}
                            autoComplete="off"
                            placeholder='Correo' />
                    </li>
                    <li className='input password'>
                        <span>
                            {assets.password}
                        </span>
                        <input
                            type="password"
                            name='password'
                            onChange={handlerChange}
                            autoComplete="off"
                            placeholder='Contraseña' />
                    </li>
                    <li className='forgot-password'>Olvidé mi Contraseña</li>
                    <li className='btn'>
                        <input
                            type="submit"
                            value="Iniciar sesión" />
                    </li>
                </ul>
            </form>
            <h6>- O -</h6>
            <div className="login-google">
                <button>
                    {assets.google}
                    <span>Continua con Google</span>
                </button>
            </div>
        </>
    )
}

export default LoginForm