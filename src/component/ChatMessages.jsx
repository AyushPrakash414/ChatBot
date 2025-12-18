import { useState } from "react"
import ChatMessage from "./ChatMessage"
function ChatMessages()
{

    let [ChatMessages,setChatMessages]=useState([
       
    ])

    function SendMessage()
    {
        setChatMessages([
            ...ChatMessages,
            {
            message:"Test",
            sender:"user",
            id:crypto.randomUUID()
            }
    ])
        console.log(ChatMessages)
    }

    const messageComponent= ChatMessages.map(
        (x)=>{
          return(
            <>
              <ChatMessage message= {x.message} sender={x.sender} id= {x.id}></ChatMessage>
            </>
          )
        }
      )

      return (
        <>
            {messageComponent}
            <button onClick={SendMessage}></button>
        </>
      )

}
export default ChatMessages