import React from 'react';
import { Link } from 'react-router-dom'
import backgroundI from '../assets/burger.jpg'

import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='headerContainer' style={{backgroundImage:`url(${backgroundI})`}}>
                <h1>Burger Blitz</h1>
                <p>It's more than just a burger</p>
                <Link to='/menu'>
                    <button>VIEW MENU</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;