import React from 'react'
import Clock from './Clock'
import s from "../h9/HW9.module.css";

function HW9() {
    return (
        <div>
            <span className={s.header}>HomeWork 9</span>

            {/*should work (должно работать)*/}
                <Clock/>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
