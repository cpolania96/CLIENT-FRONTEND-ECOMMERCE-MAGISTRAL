import React from 'react'

function CardOpinion({sources, info}) {
    return (
        <li className='card' key={info.id}>
            <div className="comillas-top">
                {sources.icon.icons.Comillas}
            </div>
            <div className='empty'>
                <div className='user-comments'>
                    <img src={info.img} alt="" />
                </div>
            </div>
            <div className='message-container'>
                <div className='message'>
                    <p>{info.message}</p>
                    <p className='name'>-{info.name}</p>
                </div>
            </div>
            <div className="comillas-bottom">
                {sources.icon.icons.Comillas}
            </div>
        </li>
    )
}

export default CardOpinion