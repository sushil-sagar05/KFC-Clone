import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from './BottomNav'
import CartBtn from './CartBtn'
import Cart from '../Pages/Cart'



export default  function Navbar() {
  return (
    <>
  <div className='  h-24   justify-evenly  bg-white  w-full sticky top-0'>
      <div className='flex justify-evenly gap-x-96  '>
        <div className='  h-24  w-96  flex justify-evenly gap-5 relative left-[-54px] pt-8 '>
        <Link to="/" className="w-[72px] h-12 mt-1">
               <div className='h-[8vh] w-[100vw]'><img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" /></div>
                    </Link>
                    <Link to="/Menu" className="font-bold "> 
                       Menu
                    </Link>
                    <Link to="/Deals" className="font-bold">
                       Deals
                    </Link>
        </div>
        <div className='  h-24 flex relative right-[-60px]  pt-8 w-96 ' >
          <button><div className="first flex">
    <img className='h-[32px]' src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="" />
           <span className=' ml-2 font-semibold'>Sign In</span> 
           </div>  </button>
            
           <span className='ml-4 mt-3'> | </span> 
         <Link to= "/Cart">
          <CartBtn/>
 </Link>
        </div>
       
      </div>
     </div>
    <BottomNav/>

</>
  )
}