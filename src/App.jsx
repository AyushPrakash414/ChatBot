import { Component, useState } from 'react'
import './App.css'
import InputBox from "./component/InputBox.jsx"
import ChatMessages from "./component/ChatMessages.jsx";
function App() {
  const [count, setCount] = useState(0)
  let [chatMessages,setChatMessages]=useState([
       {
        message:"hi",
        sender: "robot"
       }
  ])
  return (
    <>
       <InputBox ChatMessages={chatMessages} setChatMessages={setChatMessages} />
       <ChatMessages ChatMessages={chatMessages} setChatMessages={setChatMessages} />
    </>
  )
}

export default App
 