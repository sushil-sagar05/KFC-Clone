import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Pages/Menu'

function BottomNav() {
  return (
    <div className="bottom h-[68px] bg-[#202124] flex justify-center">
    <div className='flex items-center gap-3 '>
<div className='text-[18px] m-[auto 15px auto auto] text-white  font-semibold '>
LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
</div>
<Link to="/Menu"><button className='bg-[#e4002b] rounded-3xl h-12 w-32 hover:bg-red-700'><span className='text-white'>Start Order</span></button>
</Link>
  </div>
  </div>
  )
}

export default BottomNav