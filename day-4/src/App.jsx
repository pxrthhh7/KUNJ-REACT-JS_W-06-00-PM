import { useState } from 'react'
import { Icon } from '@iconify-icon/react';
import './App.css'
import React from 'react'

const App = () => {
  
  let [mode,setmode] = useState("Dark")
  
  const changeMode = () => {
    setmode(mode == "Dark" ? "Light" : "Dark")
  }

  const main = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: "150px",
    backgroundColor: mode == "Dark" ? "white" : "black",
  }

  const btnCss = {
    width: "150px",
    height: "40px",
    backgroundColor: mode == "Dark" ? "white" : "black",
    color: mode == "Dark" ? "black" : "white",
    border: mode == "Dark" ? "2px solid black" : "2px solid white",
    cursor: "pointer"
  }



  return (
    <>
      <div className='main' style={main}>
        <button style={btnCss} onClick={changeMode}>{mode}</button>
        <Icon style={{display: mode == "Dark" ? "inline-flex" : "none"}} icon="mingcute:sun-line" width="200" height="200" />
        <Icon style={{color: "#fff" , display: mode == "Dark" ? "none" : "inline-flex"}} icon="majesticons:moon-line" width="200" height="200" />
      </div>
    </>
  )
}

export default App
