import React from 'react'

const Popupmodal = ({ title, paragraph, handleClose, Width,Height,isOpen}) => {
    if(!isOpen)return null
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='bg-warning p-3 text-center rounded-3' style={{width:Width,height:Height}}>
                <h1 className='text-center text-danger'>{title}</h1>
                <p>{paragraph}</p>
                <button type="text" class="btn btn-dark"  onClick={handleClose}>Close Modal</button>
            </div>
        </div>
    )
}

export { Popupmodal }
