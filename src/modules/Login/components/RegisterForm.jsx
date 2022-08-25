import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import AssetsHandler from '../../../assets/assetsHandler'

function RegisterForm() {
    const sources = AssetsHandler()
    const assets = {
        user: sources.icon.icons.User,
        email: sources.icon.icons.Arroba,
        password: sources.icon.icons.Password
    }

    const history = useNavigate()

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handlerChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handlerSignup = (e) => {
        e.preventDefault() 
        if(data.name = '' || data.email === '' || data.password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Los campos no pueden estar vacíos'
            })
        }
        const regExp = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        
        if(data.email !== '' && !regExp.test(data.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese un correo válido'
            })
        }
        setTimeout(()=> {
            axios   
            .post('http://localhost:9090/api/user/register', {
                name: data.name,
                email: data.email,
                password: data.password
            })
            .then(res => {
                if(res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: res.data.message
                    })
                    const token = res.data.token
                    const userData = res.data.name
                    localStorage.setItem('Token', token)
                    localStorage.setItem('User', userData)
                    history('/dashboard')   
                } 
            })
            .catch(err => {
                console.log(err);
                if(err.response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: err.response.data.message
                    })
                }
            })
        }, 600)

    }   
    return (
        <>
            <form
                action=""
                className='signup-form'
                onSubmit={handlerSignup}>
                <ul>
                    <li className='input email'>
                        <span>
                            {assets.user}
                        </span>
                        <input
                            type="text"
                            name='name'
                            onChange={handlerChange}
                            autoComplete="off"
                            placeholder='Nombre' />
                    </li>
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
                    <li className='conditions'>
                        <input type="checkbox" />Acepto los términos y condiciones</li>
                    <li className='btn'>
                        <input type="submit" value="Crear cuenta" />
                    </li>
                </ul>
            </form>
        </>
    )
}

export default RegisterForm