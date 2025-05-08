import React from 'react'
import { ChildA } from './childA';
const Parent = () => {
    const name = "Awais khan";
    return (
        <div>
            <ChildA  name={name}/>
        </div>
    )
}

export { Parent }