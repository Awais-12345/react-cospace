import React from 'react'


const DecrementButton = ({ setCount, count }) => {
        return (
            <div>
                <button onClick={() => setCount(count - 1) }  disabled={count === 0}  >-</button>

            </div>
        )
}

export { DecrementButton }
