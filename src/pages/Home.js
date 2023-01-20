import React from 'react';
import { Link } from 'react-router-dom'
import backgroundI from '../assets/homebackground.jpg'

import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{backgroundImage:`url(${backgroundI})`, backgroundRepeat: 'no-repeat'}}>
            <div className='headerContainer'>
                <h1><b style={{color:'dodgerblue'}}>Blitz</b> Burger</h1>
                <p>It's more than just a burger</p>
                <Link to='/menu'>
                    <button>VIEW MENU</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;