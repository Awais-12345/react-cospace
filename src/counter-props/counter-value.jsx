import React, { useState } from 'react'
import { DecrementButton } from './decrement-button'
import { IncrementButton } from './increment-button'
const CounterValue = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 >Counter value: {count}</h1>
            <DecrementButton setCount={setCount} count={count} />
            <IncrementButton setCount={setCount} count={count} />
        </div>
    )
}

export { CounterValue }
