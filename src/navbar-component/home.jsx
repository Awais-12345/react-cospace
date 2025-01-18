import React from 'react'
import { ComponentOne } from '../components/component-one/componentone'
import { ComponentTwo } from '../components/component-two/componenttwo'
import { ComponentThree } from '../components/component-three/componentthree'
import { ComponentFour } from '../components/component-four/componentfour'
import { ComponentFive } from '../components/component-five/componentfive'
import { ComponentSix } from '../components/component-six/componentsix'
import { Footer } from '../components/footer/footer'

const Home = () => {
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

export  {Home}
