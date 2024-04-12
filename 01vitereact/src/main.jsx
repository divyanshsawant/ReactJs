import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
    <>
    <h1>CustomAPP</h1></>
  )
}

//this is how react sees the returned html after it is (compiled / transcribled) by react
// const reactElement = {
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target: '_blank' //simple html
//   },
//   children: 'Click me to visit google'
// }

const anotherElement= (
  <a href='https://google.com' target = '_blank'>Visit Google</a>
)
const anotherUser = "Divyansh"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com' ,target:'_blank'},
  'click me to visit Google.',anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
  
)
