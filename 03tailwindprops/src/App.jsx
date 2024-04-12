import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-yellow-600 rounded-xl mb-4 ">
      Hello world!
    </h1>
    <Card username='Divyansh'/>
    <Card username='div2'/>
    
    </>
  )
}

export default App
