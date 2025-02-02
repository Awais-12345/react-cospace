import React from 'react'
// import { ComponentOne } from '../components/component-one/componentone'
// import { ComponentTwo } from '../components/component-two/componenttwo'
// import { ComponentThree } from '../components/component-three/componentthree'
// import { ComponentFour } from '../components/component-four/componentfour'
// import { ComponentFive } from '../components/component-five/componentfive'
// import { ComponentSix } from '../components/component-six/componentsix'
import { Contentone } from "../components-2/content-one/contentone";
import { ContentTwo } from "../components-2/content-two/contenttwo";
import { Contentthree } from "../components-2/content-three/contentthree";
import { Contentfour } from "../components-2/content-four/contentfour";
import { Contentfive } from "../components-2/content-five/contentfive";
import { Contentsix } from "../components-2/content-six/contentssix";
const Home = () => {
  return (
    <div>
      {/* <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
      <ComponentSix /> */}
       <Contentone />
      <ContentTwo />
      <Contentthree />
      <Contentfour />
      <Contentfive />
      <Contentsix />
    </div>
  )
}

export { Home }
