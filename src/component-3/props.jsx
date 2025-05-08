import React from 'react'
const Props = ({ student }) => {
    return (
        <div className='p-4'>
          
            {student.map((item) => <li key={item.id}>
                <h1 className="text-danger fw-bold">{item.name}</h1>
                <h4>{item.skills}</h4>
            </li>)}
        </div>
    )
}

export { Props }
