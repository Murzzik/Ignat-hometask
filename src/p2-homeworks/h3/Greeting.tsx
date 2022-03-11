import React, {ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, KeyboardEvent, ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {isString} from "util";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void; // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const errorMessage = error ? <div className={s.errorMsg}>Title is require</div> : null // need to fix with (?:)

    const inputClass = error ? s.error : s.inputMain

    return (
        <div className={s.inputBox}>
            {errorMessage}
            <input value={name} onChange={setNameCallback}
                   className={inputClass} onKeyDown={onEnter}
            />
            <button className={s.addUserButton} onClick={addUser} disabled={!name}>Add user</button>
            <span className={s.usersCount}>Total users count: {totalUsers}</span>
        </div>
    )
}

export default Greeting
