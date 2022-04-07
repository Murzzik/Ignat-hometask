import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'
import {v1} from "uuid";

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: string
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: v1(), name: 'React', priority: 'high'},
    {_id: v1(), name: 'Anime', priority: 'low'},
    {_id: v1(), name: 'Games', priority: 'low'},
    {_id: v1(), name: 'Work', priority: 'high'},
    {_id: v1(), name: 'Html & Css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs;
    else return affairs.filter((a: AffairType) => a.priority === filter);
}

export const deleteAffair = (affairs: Array<AffairType>, _id: string): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id)
}

// (argument) => {expressions}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: string) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <>
            <span className={s.header}>HomeWork 2</span>
            <div className={s.affairsMain}>
                {/*should work (должно работать)*/}
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />


                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeAffairs/>*/}

            </div>
        </>
    )
}

export default HW2
