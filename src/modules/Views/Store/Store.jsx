import React from 'react'
import Title from '../../Layout/Title'
import NavTitle from '../../NavTitle'
import BarTools from './modules/BarTools'

function Store() {
  const title = '/tienda'
  return (
    <div className="store">
      <NavTitle title={title}/>
      <Title title="TIENDA"/>
      <BarTools />
    </div> 
  )
}

export default Store