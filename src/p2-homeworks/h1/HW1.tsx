import React from 'react'
import Message from "./Message";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";


const messageData = {
    avatar: 'https://iconarchive.com/download/i44742/shwz/disney/pumbaa.ico',
    name: 'Alex',
    message: 'npm start нажимал?',
    time: "20:21",
}

function HW1() {
    return (
        <div>
            <hr/>
            <span className={s.Header}>HomeWork 1:</span>
            {/*should work (должно работать)*/}
            <Message avatar={messageData.avatar} name={messageData.name}
                     message={messageData.message} time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
