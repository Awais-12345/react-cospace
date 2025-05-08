import React from 'react'

const IncrementButton = ({ setCount, count }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>


    </div>
  )
}

export { IncrementButton }
