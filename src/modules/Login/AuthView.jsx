import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import useUser from '../../Hooks/useUser'
import AuthButtons from './components/AuthButtons'
import AssetsHandler from '../../Assets/AssetsHandler'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

function AuthController() {

    const [isSelected, setIsSelected] = useState(true)
    const history = useNavigate()
    const { isLogged, login, loading } = useUser()

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (isLogged) history('/')
    }, [isLogged, history])

    if (loading) return

    const handlerChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if (data.email === '' || data.password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Los campos no pueden estar vacíos'
            })
            return
        }
        if (data.email !== '' && !regExp.test(data.email)) {
            Swal.fire({
                icon: 'error',
                title: 'El email es incorrecto'
            })
            return
        }
        const { email, password } = data
        login({ email, password })
    }
    
    const renderLog = () => {
        if (!isSelected) {
            return <RegisterForm />
        } else {
            return (
                <LoginForm
                    handlerChange={handlerChange}
                    handlerSubmit={handlerSubmit}
                />
            )
        }
    }

    return (
        <>
            <div className='auth-form'>
                <AuthButtons
                    setSelected={setIsSelected}
                    isSelected={isSelected}
                />
                {renderLog()}
            </div>
        </>
    )
}

export default AuthController