import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('')
    console.log(users)


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedUserName = e.currentTarget.value.trim()

        if (trimmedUserName) {
            setName(trimmedUserName)
            error && setError('')
        } else {
            name && setName('')
            setError('Title is require')
        }
        // need to fix// need to fix any
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            onEnter={onEnter}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
