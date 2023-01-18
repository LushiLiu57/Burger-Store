import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/contactme' element={<ContactMe/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;