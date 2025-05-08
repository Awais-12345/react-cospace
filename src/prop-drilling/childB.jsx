import React from 'react'
import { ChildC } from './childC'
const ChildB = ({ name }) => {
    return (
        <div>
            <ChildC name={name} />
        </div>
    )
}

export { ChildB }
