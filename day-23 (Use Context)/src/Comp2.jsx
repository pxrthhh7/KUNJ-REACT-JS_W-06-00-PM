import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Comp2 = () => {

  const name = useContext(AppContext)

  return (
    <div>
      <h1>Hello , {name}</h1>
      <h1>From Comp 2</h1>
    </div>
  )
}

export default Comp2
