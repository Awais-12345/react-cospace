import React from 'react'
import { Contentone } from "../components-2/content-one/contentone";
import { ContentTwo } from "../components-2/content-two/contenttwo";
import { Contentthree } from "../components-2/content-three/contentthree";
import { Contentfour } from "../components-2/content-four/contentfour";
import { Contentfive } from "../components-2/content-five/contentfive";
import { Contentsix } from "../components-2/content-six/contentssix";
const Home = () => {
  return (
    <div>
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
