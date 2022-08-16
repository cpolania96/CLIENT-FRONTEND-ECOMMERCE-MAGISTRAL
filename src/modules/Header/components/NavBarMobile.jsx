import React from 'react'

function NavBarMobile({ isVisible, setVisible }) {
    return (
        <>
            <div className={`navbar-mobile ${isVisible ? `isActive` : `isNonActive`}`}>
                <nav>
                    <div className='btn-close'>
                        <button onClick={() => setVisible(false)}>
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