import React, { useState } from 'react'
import { Popupmodal } from './popupmodal'
const Button = () => {
    const [show, setshowModal] = useState(false);
    const handleShow = () => setshowModal(true)
    const handleClose = () => setshowModal(false)
    return (
        <div>
            <button type="text" class="btn btn-secondary" onClick={handleShow}>Open Modal</button>
            <Popupmodal title="Modal" isOpen={show} paragraph={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque nobis nulla tempora! Iusto ipsam inventore, labore debitis neque tenetur praesentium iure corrupti nostrum blanditiis ea delectus dicta nobis? Autem?'}handleClose={handleClose} Width={500} Height={300} />
        </div>
    )
}

export { Button }
