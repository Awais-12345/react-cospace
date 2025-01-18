import React from 'react'
import { ComponentOne } from './component-one/componentone'
import {ComponentTwo} from './component-two/componenttwo'
import { ComponentThree } from './component-three/componentthree'
import { ComponentFour } from './component-four/componentfour'
import { ComponentFive } from './component-five/componentfive'
import { ComponentSix } from './component-six/componentsix'
function MainComponent() {
  return (
    <div>
      <ComponentOne/>
      <ComponentTwo/>
      <ComponentThree/>
      <ComponentFour/>
      <ComponentFive/>
      <ComponentSix/>
    </div>
  )
}

export  {MainComponent}
