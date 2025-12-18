import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from "./component/InputBox.jsx"
import ChatMessages from './component/ChatMessages.jsx'
function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
       <InputBox />
       <ChatMessages/>
    </>
  )
}

export default App
 