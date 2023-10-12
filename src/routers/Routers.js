import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import CarList from '../pages/CarList'
import Header from '../components/Header'



const Routers = () => {
  return (
   


   <BrowserRouter>
   <Header></Header>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cars" element={<CarList />} />
    <Route path="*" element={<NotFound />} />
  </Routes>

  </BrowserRouter>
 
  )
}

export default Routers
