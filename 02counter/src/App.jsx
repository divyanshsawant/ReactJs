import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  // let counter =5;

  const addValue = () =>{
    console.log('Clicked',counter);
    if (counter<20) {
      counter +=1;
    }
    setCounter(counter)
  }

  const removeValue = () =>{
    console.log('Clicked',counter);
    if (counter>0) {
      counter-=1;
    }
    setCounter(counter);
  }

  return (
    <>
    <h1>Its me divyansh</h1>
    <h2>Coutner value : {counter}</h2>
    <br />
    <button onClick={addValue}>Add value  {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value   {counter}</button>

    <p>Footer : {counter}</p>

    </>
  )
}

export default App
