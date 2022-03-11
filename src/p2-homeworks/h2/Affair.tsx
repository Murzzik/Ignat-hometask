import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: string) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affairsList}>
            <div className={s.customName}> {props.affair.name}:</div>
            <div className={s.customPriorityTitle}>{props.affair.priority} priority</div>
            <div className={s.divButton}>
                <button className={s.deleteButtonStyle} onClick={deleteCallback}>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    )
}

export default Affair
