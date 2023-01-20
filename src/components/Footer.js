import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <AiFillInstagram />
        <AiFillTwitterCircle/>
        <AiFillFacebook/>
      </div>
      <p>&copy; 2023 blitzburger.com</p>
    </div>
  )
}
