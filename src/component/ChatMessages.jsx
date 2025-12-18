import ChatMessage from "./ChatMessage"
function ChatMessages()
{
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
            {messageComponent}
        </>
      )

}
export default ChatMessages