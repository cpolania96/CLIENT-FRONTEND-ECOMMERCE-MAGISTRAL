import React from 'react'
import AssetsHandler from '../../assets/assetsHandler'

function Footer() {
  const source = AssetsHandler()
  const assets = {
      logo: source.icon.indentity.logo
  }
  const NavMenu = [
    {
      id: 1,
      name: 'Tienda',
      url: ''
    },
    {
      id: 2,
      name: 'Blog',
      url: ''
    },
    {
      id: 3,
      name: 'Contacto',
      url: ''
    },
    {
      id: 4,
      name: 'Legal',
      url: ''
    },
  ]
  return (
    <footer>
      <div className="subscribe-form">
        <form onSubmit="">
          <h4>Suscribete y recibe promociones exclusivas</h4>
          <ul>
            <li>
              <input
                type="text"
                placeholder='Nombre'
              />
              <li>
                <input
                  type="text"
                  placeholder='E-mail'
                />
              </li>
              <li className='submit'>
                <input type="submit" value="Suscribirme" />
              </li>
            </li>
          </ul>
        </form>
      </div>
      <div className="nav">
        <h3>Navegar</h3>
        <ul>
          {NavMenu.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className='logo-footer'>
          {assets.logo}
          <p>By Magistral Team</p>
      </div>
    </footer>
  )
}

export default Footer