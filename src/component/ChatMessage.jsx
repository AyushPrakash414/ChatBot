import robotIcon from "../assets/icons8-robot-48.png"
import userIcon from "../assets/icons8-user-48.png"

function ChatMessage(props) {
    const ActualRobot=props.sender==='robot';
    return (
        < div className="flex items-center gap-2 mt-5 text-sm font-bold px-4">
            {ActualRobot&& <img src={robotIcon} className=" mb-3 " />}
            {props.message}
            {!ActualRobot&& <img src={userIcon} className=" mb-3 " />}
        </div>
    )
}

export default ChatMessage