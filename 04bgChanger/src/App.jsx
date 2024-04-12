import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="h-screen w-screen duration-200 " style={{backgroundColor:  color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 py-1 text-white shadow-sm' style={{backgroundColor:'red '}} onClick={()=>{setColor('red')}}>Red</button>
          <button className='outline-none px-4 py-1 text-white shadow-sm' style={{backgroundColor:'green '}} onClick={()=>{setColor('green')}}>Green</button>
          <button className='outline-none px-4 py-1 text-white shadow-sm' style={{backgroundColor:'blue '}} onClick={()=>{setColor('blue')}}>Blue</button>
          <button className='outline-none px-4 py-1 text-white shadow-sm' style={{backgroundColor:'violet '}} onClick={()=>{setColor('violet')}}>Violet</button>
          <button className='outline-none px-4 py-1 text-white shadow-sm' style={{backgroundColor:'black '}} onClick={()=>{setColor('black')}}>Black</button>  
          <button className='outline-none px-4 py-1 text-white shadow-sm' style={{backgroundColor:'gold '}} onClick={()=>{setColor('gold')}}>Gold</button>
        </div>  

      </div>
    </div>
  )
}

export default App
