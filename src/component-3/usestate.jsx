import React, { useState } from 'react'
import { Props } from './props'
import { Object } from './aryobj'
const Usestate = () => {
  const [show, setShow] = useState(Object)
  return (
    <div>
      <Props student={show} />
    </div>
  )
}

export { Usestate };
