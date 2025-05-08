import React, { useState } from 'react'
import { Map } from './map';
const Component = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(true)} className="bg-blue px-4 py-2 rounded">On click show data</button>
            <Map show={show} />
        </div>
    )
}

export { Component }
