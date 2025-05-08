import React from 'react'
import { Button } from 'react-bootstrap'

const CustomModal = ({ title, children, isOpen, handleClose, Width, Height }) => {
    if (!isOpen) return null
    return (
        <div>
            <div className="bg-white rounded-4 position-absolute  translate-middle top-50 start-50 end-50 " style={{ width: Width, height: Height }}>
                <div className="d-flex justify-content-between align-items-center px-3 py-3">
                    <h1 className='text-black fs-4'>{title}</h1>
                    <Button onClick={handleClose}>CLose</Button>
                </div>
                <div>
                    {children}
                </div>
            </div>

        </div>


    )
}

export { CustomModal }

