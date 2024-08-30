import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


function HeroDeals() {
  return (
    <div className="container w-full bg-[#202124]">
    <div className="offers ml-[12%] box-border  ">
        
 <div className="offer-container-head ml-[3.2%] mb-[40px] items-center flex justify-around">
   <h2 className='space-x-1 font-extrabold text-[38px] text-[#fff]'>Exclusive offer for you</h2>
   
   <div className='flex'><Link to="/Deals"><span className='text-white flex font-semibold'>View All Deals</span> </Link> <LiaLongArrowAltRightSolid className=' mt-1 ml-1 text-white' />
   </div>

 </div>

    </div>
    </div>
  )
}

export default HeroDeals