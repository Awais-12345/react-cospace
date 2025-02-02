// import React from 'react'
// import pit1 from '../../images/1imk.png';
// import pit2 from '../../images/2img.png';
// import pit3 from '../../images/3imd.png';
// const Contentfive = () => {
//   return (
//     <div className='mb-5' style={{backgroundColor:"#ecfef7"}}>
//       <div className="container pt-5 pb-5">
//         <div className="row">
//             <div className="col">
//             <h2 className='text-black pb-2'>Our Latest Blog</h2>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-md-4 d-flex gap-2">
//             <div className="div">
//             <img src={pit1}  alt="..."/>
//             <p className='text-black pt-2 fw-bold'>Why your business absolutely<br/> needs a virtual office</p>
//             </div>
//             <div className="div">
//             <img src={pit2}  alt="..."/>
//             <p className='text-black pt-2 fw-bold'>How to Run Your Freelance<br/> Design Business on the Cheap</p> 
//             </div>
//             <div className="div">
//             <img src={pit3} alt="..."/>
//             <p className='text-black pt-2 fw-bold'>Getting Clients to Care About<br/> Their Website Long Term</p>
//             </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export {Contentfive}
import React from 'react'
import pit1 from '../../images/1imk.png';
import pit2 from '../../images/2img.png';
import pit3 from '../../images/3imd.png';

const Contentfive = () => {
  return (
    <div className='mb-5' style={{ backgroundColor: "#ecfef7" }}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col">
            <h2 className='text-black pb-2 text-center text-md-start'>Our Latest Blog</h2>
          </div>
        </div>
        <div className="row gy-4"> 
          <div className="col-12 col-md-4">
            <div className="div text-center">
              <img src={pit1} className="img-fluid rounded-3" alt="..." />
              <p className='text-black pt-2 fw-bold text-center text-md-start'>
                Why your business absolutely<br /> needs a virtual office
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="div text-center">
              <img src={pit2} className="img-fluid rounded-3" alt="..." />
              <p className='text-black pt-2 fw-bold text-center text-md-start'>
                How to Run Your Freelance<br /> Design Business on the Cheap
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="div text-center">
              <img src={pit3} className="img-fluid rounded-3" alt="..." />
              <p className='text-black pt-2 fw-bold text-center text-md-start'>
                Getting Clients to Care About<br /> Their Website Long Term
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contentfive }
