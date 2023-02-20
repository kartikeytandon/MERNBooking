import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Hotel from './pages/hotel/Hotel'
import List from './pages/list/List'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
    </Routes>
  )
}

export default App
