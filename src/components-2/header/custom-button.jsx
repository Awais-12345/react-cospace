import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({ children }) => {
    return (
        <div>
            <Button> {children}</Button>
        </div>
    )
}

export { CustomButton }
