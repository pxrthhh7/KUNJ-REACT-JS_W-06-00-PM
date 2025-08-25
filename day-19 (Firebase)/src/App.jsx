import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from './firebase';

const App = () => {

  const [input, setInput] = useState("")

  const addUser = async (user) => {
    try {
      const docRef = await addDoc(collection(db, "newUser"), {
        name : user
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handelAdd = (() => {
    addUser(input)
  })

  return (
    <div>
      <h1>Firestore Document Adding Example</h1>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={handelAdd}>Add</button>
    </div>
  )
}

export default App;