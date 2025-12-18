import { useState } from "react";
import ChatMessages from "./ChatMessages";

function InputBox(props)
{

    let [chatInput,setChatInput]=useState("");

    function ChatInput(event)
    {
        setChatInput(event.target.value);
       
    }

    function SendMessage()
    {
        props.setChatMessages([
            ...props.ChatMessages,
            {
            message:chatInput,
            sender:"user",
            id:crypto.randomUUID()
            }
    ])
        setChatInput('')
    }

    return (
        <>
        <input placeholder="Send The Message" onChange={ChatInput} value={chatInput} />
        <button onClick={SendMessage}>Send</button>
        </>
    )
}
export default InputBox