import React from 'react'
import style from "./Message.module.css"

type MessagePropsType = {
    name: string
    avatar: string
    message: string
    time: string
}

function Message(messageData: MessagePropsType) {
    return (
        <div className={style.message}>
            <img src={messageData.avatar} className={style.memberAvatar}></img>
            <div className={style.chatWindow}>
                <div className={style.memberName}>{messageData.name}</div>
                <div className={style.chatMessage}>{messageData.message}</div>
                <div className={style.chatTime}>{messageData.time}</div>
                <div className={style.chatWindow_arrow}></div>
            </div>
        </div>
    )
}

export default Message
