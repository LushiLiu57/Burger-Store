import React from 'react'
import {useState} from "react"
import zerus from '../assets/zerus.JPG'
import { Link } from 'react-router-dom'
import { BsList } from 'react-icons/bs'

import '../styles/Nav.css'

function Nav() {
    const [links, setlinks] = useState(false)

    const toggleNav = () => {
        setlinks(!links)
    }

    return (
    <div className='nav'>
      <div className='left'>
        <img src={zerus} />
      </div>
      <div className='right'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/contactus'>Contact Us</Link>
        {/* <button onClick={toggleNav}><BsList/></button> */}
      </div>
    </div>
    )
}

export default Nav