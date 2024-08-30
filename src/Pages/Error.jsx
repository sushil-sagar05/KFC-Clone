import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
   <div className="biggerContainer flex justify-center items-center pt-36   gap-x-10  h-[80vh] w-[100vw]">
   <div className="left w-[35vw]  pl-20 h-[75vh] ">
    <div className="img"><img src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" alt="" /></div>
   </div>
   <div className="right w-[55vw] h-[100vh] mt-48  text-left ">
    <div className="content    ">
  <span>  <h1 className='font-bold h-[14vh] text-6xl w-[12vw]  pt-4 text-red-500 '>404</h1> </span> 
  <div className="heading">
    <h1 className='font-extrabold  text-5xl h-[26vh] w-[42vw]'>THERE'S NO FRIED CHICKEN ON THIS PAGE...</h1>
  </div>
 
   </div>
   <div className="btn"><Link to='/'><button 
  
  className='text-white bg-black rounded-3xl h-[7vh] w-[12vw]'>Take Me Home</button></Link></div>
   </div>
   </div>
   </>
  )
}

export default Error