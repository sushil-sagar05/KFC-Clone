import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Slices/CartSlice'

function LastCart({name,price,img,id,qty}) {
    const dispatch = useDispatch()
  return (
    <>
        <div className=' mt-14 h-[100vh] w-[100vw]'>
      <div className='font-extrabold text-3xl ml-14'>WE THINK YOU'LL LOVE THESE</div>
      <div className="card">
      <div className="summaryCard bg-white shadow-lg w-[18vw] sticky ml-14 h-[75vh] mb-5  rounded-md">
         
       
         <div className="summaryContent rounded-md mt-10 ">
           <img  className='rounded-md' src={img} alt="" />
         <div className='flex justify-around'>
          <div className="name font-semibold">{name}</div>
          <div className="rupee font-semibold">₹{price}</div>
         </div>
         <div className="veg ml-3">Non-veg . serves {qty}</div>
         <div className="content ml-3">Large Pack of Chicken Popcorns seasoned with the Chilly Lime flavours</div>
         </div>
         <div className="button"><button
           onClick={()=> {
            dispatch(addToCart({id,name,price,img,qty:1 }))
          }}
         className='h-[44px] flex w-[184px] p-[11px 40px] mt-16 ml-7 text-white bg-[#e4002b] border-[1px] border-solid border-[#e4002b] pt-3 gap-2 justify-center rounded-[10rem]'> Add to cart
              <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" alt="" />
            </button></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default LastCart