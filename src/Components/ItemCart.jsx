import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeFromCart,increament,decrement } from '../Redux/Slices/CartSlice' 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemCart({id, name,price,img,qty}) {
  
  const dispatch = useDispatch();

  return (
    <>
 <div className="FoodCardContainer w-[47vw] ml-20 rounded-md flex h-[20vh] mb-5 bg-[#f8f7f5]">
  <img className='w-[10vw] p-3 rounded-sm'
  src={img} alt="" />
  <div className="foodCard ml-3">
    <div className="foodName mt-4">{name}</div>
    <div className="remove mt-12">
      <button  onClick={()=> {dispatch(removeFromCart({id,name,img,price}))}}>Remove</button>
    </div>
  </div>
  <div className="funtionalCard flex mt-14 gap-14 ml-44 ">
    
    <div className="incrementDecrement flex gap-3 ">
    <AiOutlineMinus 
        onClick={()=> qty>1 ? dispatch(decrement({id})) : qty = 0}
           className='border-2 border-gray-600 text-gray-600 hover:text-white ml-2 hover:bg-pink-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
         <span>{qty}</span>
         <AiOutlinePlus 
          onClick={()=> qty>=0 ? dispatch(increament({id})) : qty = 0}
          className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-pink-500 hover:border-none rounded-md p-1 mr-2 text-xl transition-all ease-linear cursor-pointer'/>
         
        </div>
        
        <div className="price">₹{price.slice(0,6)}</div>
        </div>
    </div>
</>
  )}
export default ItemCart