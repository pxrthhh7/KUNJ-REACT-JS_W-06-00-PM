import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  let [mode , setmode] = useState("Dark") // lightgij

  let changeMode = () => {
    const newMode = mode === 'Dark' ? 'Light' : 'Dark';
    setmode(newMode);
    document.body.style.backgroundColor = newMode === 'Dark' ? '#fff' : '#000';
  }

  return (
    <>
      <button onClick={changeMode}>{mode}</button>
    </>
  )
}

export default App
