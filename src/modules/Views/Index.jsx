import React from 'react'
import AssetsHandler from '../../assets/assetsHandler'
import ContentContainer from '../Layout/ContentContainer'
import Title from '../Layout/Title'
import { Link } from "react-router-dom";
import CardsOpinion from '../CardOpinion/CardsOpinion';

function Index() {
  const sources = AssetsHandler()

  const assets = {
    nails: 'https://res.cloudinary.com/devsy44f3/image/upload/v1660111956/Products/Ecommerce-Magistral/img/Captura_de_pantalla_2022-08-10_011125_jhoqle.png'
  }
  const bannerIcons = [
    {
      id: 1,
      title: 'Compras seguras',
      ico: sources.icon.icons.Secure
    },
    {
      id: 2,
      title: 'Envios gratis*',
      ico: sources.icon.icons.Delivery
    },
    {
      id: 3,
      title: 'Paga cuando recibas',
      ico: sources.icon.icons.Wallet
    }
  ]
  const correctIco = (id) => {
    console.log(id);
    if (id === 3) return console.log('translate');
    else null
  }
  const infoCards = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/devsy44f3/image/upload/v1660120416/Products/Ecommerce-Magistral/img/Recurso_1_10_nfnjju.png',
      ico: sources.icon.icons.Check,
      title: 'Endurecedor de uñas',
      subtitle: [
        {
          id: 1,
          title: 'Nutre la raiz de la uña',
          ico: sources.icon.icons.Check
        },
        {
          id: 2,
          title: 'Potencia el crecimiento de la uña',
          ico: sources.icon.icons.Check
        },
        {
          id: 3,
          title: 'Repara uñas debiles y maltratadas',
          ico: sources.icon.icons.Check
        }
      ]
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/devsy44f3/image/upload/v1660120430/Products/Ecommerce-Magistral/img/Recurso_tyjj6u1_1_fzzrgk.png',
      title: 'Aceite vitaminico',
      subtitle: [
        {
          id: 1,
          title: 'Nutre la raiz de la uña',
          ico: sources.icon.icons.Check
        },
        {
          id: 2,
          title: 'Potencia el crecimiento de la uña',
          ico: sources.icon.icons.Check
        },
        {
          id: 3,
          title: 'Repara uñas debiles y maltratadas',
          ico: sources.icon.icons.Check
        }
      ]
    }
  ]

  return (
    <ContentContainer>
      <div className="carousell">

      </div>
      <div className="subtitle">
        <h2>
          ¡Bienvenida a tu tienda favorita de productos para el cuidado corporal!
        </h2>
      </div>
      <div className="banner-icons">
        <ul>
          {bannerIcons.map(item => (
            <li key={item.id}>
              {item.ico}
              <h2 className={correctIco(item.id)} >{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="nails-banner">
        <img src={assets.nails} alt="" />
      </div>
      <Title title={'Como hacer tu compra'} />
      <div className='container-content'>

      </div>
      <Title title={'Ten las uñas que siempre quisiste tener a un solo click de distancia'} />
      <div className='container-content'>
        <ul>
          {infoCards.map(item => (
            <li className='info-cards'>
              <div className='img'>
                <img src={item.img} />
              </div>
              <div className='description'>
                <h3>{item.title}</h3>
                <ul>
                  <li key={item.id}>
                    <ul>
                      {item.subtitle.map(item => (
                        <li key={item.id}>
                          {item.ico}
                          <h4>{item.title}</h4>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <Link to="/">
                  {sources.icon.icons.Eye}
                  <h3>
                    Conocer más...
                  </h3>
                </Link>
                <div className='button-add'>
                  <button className='add-cart'>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Title title={'Nuestras clientas nos prefieren. Muchos casos de éxito alrededor de Colombia'} />
      <div className="container-content">
        <CardsOpinion />
      </div>
    </ContentContainer>
  )
}

export default Index