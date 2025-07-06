import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MoviePage from './Pages/MoviePage'

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/movies' element={<MoviePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
