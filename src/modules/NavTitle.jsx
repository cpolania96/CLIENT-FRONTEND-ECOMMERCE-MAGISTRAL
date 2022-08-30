import React from 'react'
import AssetsHandler from '../assets/assetsHandler';

function NavTitle({title}) {
    const assets = AssetsHandler();
  const sources = {
    home: assets.icon.icons.Home,
  };
  return (
    <div className="route">
        <span>{sources.home}</span>
        {title}
      </div>
  )
}

export default NavTitle