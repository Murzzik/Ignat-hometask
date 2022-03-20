import React, {useState} from 'react'
import {ToastContainer} from "react-toastify";
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: v1(), name: name}]) // need to fix
    }


    return (
        <div>
            <hr/>
            <div className={s.hwHeader}>HomeWork 3</div>

            {/*should work (должно работать)*/}

            <GreetingContainer users={users} addUserCallback={addUserCallback} />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
