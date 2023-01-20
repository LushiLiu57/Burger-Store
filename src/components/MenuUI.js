import React from 'react'

function MenuUI({name,image,price}) {
  return (
    <div className='menuUI'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  )
}

export default MenuUI
