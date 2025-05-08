import React from 'react'
import { ChildB } from './childB'
const ChildA = ({name}) => {
    return (
        <div>
            <ChildB name={name}/>
        </div>
    )
}

export { ChildA } 