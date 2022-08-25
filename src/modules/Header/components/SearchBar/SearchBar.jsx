import React, { useState, useContext } from 'react'
import { AppContext } from '../../../../Context/AppContext'
import BtnItemNav from '../BtnItemNav'
import Search from './Search'

function SearchBar({ assets }) {
    const [clicked, setClicked] = useState(false)
    const { setBlockOverflow } = useContext(AppContext)
    const setActive = () => {
        if (clicked) {
            return 'isSearchActive'
        } else {
            return 'isSearchNonActive'
        }
    }
    let isActive = setActive()
    return (
        <>
            <BtnItemNav
                assets={assets}
                setIsVisible={setClicked}
                setBlockOverflow={setBlockOverflow}
            />
            <Search
                setActive={isActive}
                closeWindow={setClicked}
                isVisible={clicked}
                setBlockOverflow={setBlockOverflow} />
        </>
    )
}

export default SearchBar