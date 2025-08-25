import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import AdminPanel from './AdminPanel'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
