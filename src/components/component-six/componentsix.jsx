import React from 'react'
import './componentsix.css'
function ComponentSix() {
  return (
    <div>
       <div className="type">
        <div className="sub_text">

        <h2>Subs to News Letter</h2>
      </div>
        <p className="sub_p1">
          Generate Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore 
        </p>
      

        <div className="sub_flex">

          <input className="p1" type="text" name="text" value="Email address..."/>
          <button className="p2" type="Subscribe">Subscribe</button><br/>
        </div>
        <p className="sub_p2">
          We’ll never share your emaill with anyone else.
        </p>
      </div>
    </div>
  )
}

export  {ComponentSix}
