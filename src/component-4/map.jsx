import React from 'react'
import { Objectdata } from './arrayofobjects';
const Map = ({ show }) => {
    return (
        <div>
            {show && (
                <ul className="mt-4 p-3">
                    {Objectdata.map((item) => <li key={item.id} className="p-2">
                        {item.name}
                        {item.age}
                    </li>)}
                </ul>
            )}
        </div>
    )
}

export { Map }