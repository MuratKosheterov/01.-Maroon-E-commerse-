import React from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Catalog from './pages/Catalog'

import Review from './pages/Review'
import Home from './pages/Home'
import Contacts from './components/Contacts'
import Cart from './pages/Cart'

function App() {
  return (
    <div className=' duration-300 ease-in' >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/:id" element={<Review />} />
        <Route path='/cart' element={<Cart/>}  />
      </Routes>
      <Footer />
    </div>
  )
}

export default App