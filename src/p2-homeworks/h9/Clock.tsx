import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h9/HW9.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString() // fix with date

    return (
        <div>

                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                ><div className={s.timeBlk}>
                    {stringTime}
                </div>

                {show && (
                    <div className={s.dateBlk}>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={s.clockBtn}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>


        </div>
    )
}

export default Clock
