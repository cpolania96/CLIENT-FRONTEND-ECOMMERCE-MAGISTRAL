import React from 'react'
import AssetsHandler from '../../assets/assetsHandler'
import { Link } from 'react-router-dom'

function Header() {
    const sources = AssetsHandler()
    const newsBanner = {
        text: 'TU PRIMERA COMPRA CON BONO DE DESCUENTO DEL 10%'
    }
    const { icon } = sources
    const assets = {
        logo: icon.indentity.logo,
        menu: icon.icons.Menu,
        search: icon.icons.Search,
        user: icon.icons.User,
        shopbag: icon.icons.ShopBag
    }
    return (
        <>
            <div className='news-banner'>
                <p className="news-title">
                    {newsBanner.text}
                </p>
            </div>
            <header>
                <div className="header-container">
                    <button>
                        {assets.menu}
                    </button>
                    <button>
                        {assets.search}

                    </button>
                    <Link to="/">
                        <div className='logo'>
                            {assets.logo}
                        </div>
                    </Link>
                    <button>
                        {assets.user}
                    </button>
                    <button>
                        {assets.shopbag}
                    </button>
                </div>

            </header>
        </>

    )
}

export default Header