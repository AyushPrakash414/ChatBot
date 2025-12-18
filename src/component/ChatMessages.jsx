import { useState } from "react"
import ChatMessage from "./ChatMessage"
function ChatMessages(props)
{ 

    const messageComponent= props.ChatMessages.map(
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
            {messageComponent}
        </>
      )

}
export default ChatMessages