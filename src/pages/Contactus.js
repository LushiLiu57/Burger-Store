import React from 'react'
import '../styles/Contact.css'
import backgroundI from '../assets/homebackground.jpg'

function Contactus() {
  return (
    <div className='contactus'>
        <div className='store-info' >
            <h1 style={{fontStyle:'Ariel'}}>Our Locations</h1>
            <h3>Toronto</h3>
            <div className='location'>
                <p>122 Smith Street</p>
                <p>123-456-7890</p>
            </div>
            <div className='location'>
                <p>66 George Street</p>
                <p>999-999-0000</p>
            </div>
            <h3>Vancouver</h3>
            <div className='location'>
                <p>2311 9th street</p>
                <p>222-333-4242</p>
            </div>
            <h2>Store Hours</h2>
            <div className='hours'>
                <p>Monday: 10:00 ~ 9:00</p>
                <p>Tuesday: 10:00 ~ 9:00</p>
                <p>Wednesday: 10:00 ~ 9:00</p>
                <p>Thursday: 10:00 ~ 9:00</p>
                <p>Friday: 10:00 ~ 9:00</p>
                <p>Saturday: 11:00 ~ 8:00</p>
                <p>Sunday: 11:00 ~ 6:00</p>
            </div>
        </div>
        <div className='contact-form'>
            <h3>Got Questions? Contact Us!</h3>
            <form id='email-form' method='POST'>
                <label htmlFor='name'>Name</label>
                <input name='name' placeholder='Enter First Name...' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Your Email...' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea name='message' rows='7' placeholder='Enter Your Message...' required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contactus
