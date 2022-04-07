import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitST, loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'
import {GuardSpinner, PongSpinner, RotateSpinner, TraceSpinner} from "react-spinners-kit";

function HW10() {
    const dispatch = useDispatch()
    const state = useSelector<AppStoreType, InitST>(state => state.loading)
    const loading = state.isLoading

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)
        console.log('loading...')
    };

    return (
        <div>
            <span className={s.header}>HomeWork 10</span>

            {/*should work (должно работать)*/}
            {loading
                ? ( <div className={s.loadingAnimation}>
                        <RotateSpinner color='#DD4A48'/>
                    </div>
                ) : (
                    <div className={s.btn}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
