import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './common/c4-SuperEditableSpan/SuperSpan.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const restoreValue = restoreState('editable-span-value', value)
        setValue(restoreValue)
    }
    return (
        <div>
            <span className={s.header}>HomeWork 5</span>

            {/*should work (должно работать)*/}
            <div className={s.superSpan}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'Enter your text'}}
                />
            </div>
            <div className={s.superBtn}>
                <SuperButton className={s.selfBtn} onClick={save}>save</SuperButton>
                <SuperButton className={s.selfBtn} onClick={restore}>restore</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
        </div>
    )
}

export default HW6
