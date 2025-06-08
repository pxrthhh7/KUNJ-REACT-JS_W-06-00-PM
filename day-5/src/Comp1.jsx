import React from 'react'
import Comp2 from "./Comp2";

const Comp1 = ({count}) => {
  return (
    <>
      <Comp2 count={count} />
    </>
  )
}

export default Comp1
