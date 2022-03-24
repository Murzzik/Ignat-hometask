import React from 'react'
import Affair from './Affair'
import s from './Affairs.module.css'
import {AffairType, FilterType} from './HW2'


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: string) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    return (
        <>
            {mappedAffairs}
            <div className={s.priorityButtonDiv}>
                <button className={s.priorityButton} onClick={setAll}>All</button>
                <button className={s.priorityButton} onClick={setHigh}>High</button>
                <button className={s.priorityButton} onClick={setMiddle}>Middle</button>
                <button className={s.priorityButton} onClick={setLow}>Low</button>
                <button className={s.priorityButton} onClick={() => window.location.reload()}>Reload</button>
            </div>
        </>
    )
}

export default Affairs
