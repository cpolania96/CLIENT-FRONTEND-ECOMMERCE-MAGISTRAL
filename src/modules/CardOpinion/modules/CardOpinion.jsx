import React from 'react'

function CardOpinion({sources}) {
    return (
        <li className='card'>
            <div className="comillas-top">
                {sources.icon.icons.Comillas}
            </div>
            <div className='empty'>
                <div className='user-comments'>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='message-container'>
                <div className='message'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum id debitis eaque autem totam iusto tenetur labore.</p>
                </div>
            </div>
            <div className="comillas-bottom">
                {sources.icon.icons.Comillas}
            </div>
        </li>
    )
}

export default CardOpinion