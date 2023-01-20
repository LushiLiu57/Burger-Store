import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contactus from './pages/Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          {/* <Route path='/contactme' element={<ContactMe/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;