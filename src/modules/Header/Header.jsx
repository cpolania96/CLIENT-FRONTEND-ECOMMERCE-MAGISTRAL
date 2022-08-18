import React, { useEffect, useState, useContext } from 'react'
import AssetsHandler from '../../assets/assetsHandler'
import { Link } from 'react-router-dom'
import NavBarMobile from './components/NavBar/NavBarMobile'
import SearchBar from './components/SearchBar/SearchBar'
import { AppContext } from '../../Context/AppContext'

function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const { setBlockOverflow } = useContext(AppContext) || {}
    
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

    const setNavOpen = (bool) => {
        setMenuIsVisible(bool)
        setBlockOverflow(bool)
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
                    <button onClick={() => setNavOpen(true)}>
                        {assets.menu}
                    </button>
                    <SearchBar
                        assets={assets}
                    />
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
                <NavBarMobile
                    isVisible={menuIsVisible}
                    setVisible={setMenuIsVisible}
                    setBlockOverflow={setBlockOverflow}
                />
            </header>
        </>

    )
}

export default Header