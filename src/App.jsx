import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from "./component/InputBox.jsx"
import ChatMessage from "./component/ChatMessage.jsx"
function App() {
  const [count, setCount] = useState(0)
  const ChatMessages=[
    {
    message:"Hello",
    sender:"user"
    },
    {
      message:"how May I help You?",
      sender:"robot"
    },
    {
      message:"what is Ai?",
      sender:"user"
    },
    {
      message:"your Servent",
      sender:"robot"
    },
]

 const messageComponent= ChatMessages.map(
    (x)=>{
      return(
        <>
          <ChatMessage message= {x.message} sender={x.sender}></ChatMessage>
        </>
      )
    }
  )

  return (
    <>
       <InputBox />
       {messageComponent}
    </>
  )
}

export default App
 