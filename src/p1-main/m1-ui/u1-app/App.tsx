import React from 'react'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from '../../../p2-homeworks/h3/HW3'
import HW4 from '../../../p2-homeworks/h4/HW4'
import HW5 from "../../../p2-homeworks/h5/HW5";
import s from './App.module.css'

function App() {
    return (
        <div>
            <span className={s.Header}>REACT HOMEWORKS:</span>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>
        </div>
    )
}

export default App
