import React from 'react'
import { useState } from 'react'

function Counter({}) {
    const [count, setCount] = useState(1)
    const [disable, setDisable] = useState(false)

    const id = document.querySelector("btnless")

    function buttonDisable(id) {
        if (disable === true) {
            id.disable = true
        } else {
            id.disable = false
        }
    }

    const handleCount = () => {
        setCount(count + 1)
    }
    const lessCount = () => {
        if (count <= 1) {
            setDisable(true)
            buttonDisable(id)
        }
        else {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className="item-count">
                <button className="btnless" onClick={lessCount}>-</button>
                <h6>{count}</h6>
                <button className="btnplus" onClick={handleCount}>+</button>
            </div>
        </>
    )
}

export default Counter