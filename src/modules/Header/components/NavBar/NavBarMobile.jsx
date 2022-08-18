import React from 'react'

function NavBarMobile({ isVisible, setVisible, setBlockOverflow }) {
    return (
        <>
            <div className={`navbar-mobile ${isVisible ? `isActive` : `isNonActive`}`}>
                <nav>
                    <div className='btn-close'>
                        <button onClick={() => {
                            setVisible(false)
                            setBlockOverflow(false)
                        }}>
                            X
                        </button>
                    </div>
                    <menu>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </menu>
                </nav>
            </div>
        </>
    )
}

export default NavBarMobile