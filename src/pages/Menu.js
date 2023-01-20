import React from 'react'
import {MenuBurgers, MenuSides, MenuDrinks} from '../helpers/MenuBurgers'
import MenuUI from '../components/MenuUI'
import '../styles/Menu.css'

export default function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Menu</h1>
      <h2>Burgers</h2>
      <div className='menuItems'>
        {MenuBurgers.map((menuItem, key) => {
            return (<MenuUI key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price}/>);
        })}
      </div>
      <h1>Make it a Combo: Add fries and any soft drink for an additional $5</h1>
      <h2>Sides</h2>
      <div className='menuItems'>
        {MenuSides.map((menuItem, key) => {
            return (<MenuUI key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price}/>);
        })}
      </div>
      <h2>Drinks</h2>
      <div className='menuItems'>
        {MenuDrinks.map((menuItem, key) => {
            return (<MenuUI key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price}/>);
        })}
      </div>
    </div>
  )
}
