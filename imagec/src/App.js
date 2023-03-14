import React from 'react'
import Carousel from './compoonents/carousel';
import Carousel1 from './compoonents/Carousel1';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='APP'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Carousel/>}/>
        <Route path='/carousel1' element={<Carousel1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App