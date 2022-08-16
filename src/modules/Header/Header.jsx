import React, { useEffect, useState, useContext } from 'react'
import AssetsHandler from '../../assets/assetsHandler'
import { Link } from 'react-router-dom'
import NavBarMobile from './components/NavBarMobile'
import { AppContext } from '../../Context/AppContext'

function Header() {

    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const {clicked, setClicked} = useContext(AppContext) || {}
    console.log(clicked);
    const menuVisible = (data) => {
        setMenuIsVisible(data)
    }
    useEffect(() => {
        menuVisible(true)
    }, [menuIsVisible])



    console.log(menuIsVisible);
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
                    <button onClick={() => setClicked(true)}>
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
                <NavBarMobile
                    isVisible={clicked}
                    setVisible={setClicked} />
            </header>
        </>

    )
}

export default Header