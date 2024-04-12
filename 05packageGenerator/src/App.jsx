import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charactersAllowed,setCharactersAllowed] = useState(false)

  const [password,setPassword] = useState("")

  //refHook

  const passwordRef = useRef(null)



  const passwordGenerator = useCallback(()=>{
    let pass=  "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charactersAllowed) str+="!@#$%^&*()_+-={}[]`~"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  },[length,numberAllowed,charactersAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,100);  selects only from 0 to 3.
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,passwordGenerator])

  return (
    
      <>
      
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h2>Password Generator</h2>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password} 
            className='outline-none w-full py-1 px-3'
            placeholder='password' readOnly
            ref={passwordRef}
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
            >COPY</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"  min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
              <label htmlFor="">Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
                      defaultChecked={numberAllowed}
                      id="numberInput"
                      onChange={()=>{
                        setNumberAllowed((prev)=>!prev)
                      }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
                      defaultChecked={charactersAllowed}
                      id="characterInput"
                      onChange={()=>{
                        setCharactersAllowed((prev)=>!prev)
                      }}
              />
              <label htmlFor="numberInput">Characters</label>
            </div>
          </div>
        </div>
      </>
        
  )
}

export default App
