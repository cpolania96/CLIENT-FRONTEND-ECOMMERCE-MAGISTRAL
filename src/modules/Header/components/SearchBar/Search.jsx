import React from 'react'

function Search({ isVisible, closeWindow, setBlockOverflow }) {
    return (
        <div
            className={`search-bar ${isVisible ? `isSearchActive` : `isSearchNonActive`}`}
        >
            <div className="close-button">
                <button onClick={() => {
                    closeWindow(false)
                    setBlockOverflow(false)}}>
                    X
                </button>
            </div>
            <div className='search'>
                <input
                    type="text"
                    placeholder='Buscar...' />
            </div>
        </div>
    )
}

export default Search