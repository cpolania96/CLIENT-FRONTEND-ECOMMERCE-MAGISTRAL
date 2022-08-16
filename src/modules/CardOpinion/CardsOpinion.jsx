import React from 'react'
import AssetsHandler from '../../assets/assetsHandler'
import CardOpinion from './modules/CardOpinion'

function CardsOpinion() {
  const sources = AssetsHandler()
  const cardsInfo = {
    
  }
  return (
    <ul>
      <CardOpinion sources={sources}/>
    </ul>
  )
}

export default CardsOpinion