import React from 'react'

function BtnItemNav({setIsVisible, assets, setBlockOverflow}) {
    return (
        <button
            onClick={() => {
                setIsVisible(true)
                setBlockOverflow(true)}}>
            {assets.search}
        </button>
    )
}

export default BtnItemNav