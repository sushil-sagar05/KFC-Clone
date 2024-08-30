import React from 'react'
import ItemCart from '../Components/ItemCart'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../Redux/Slices/CartSlice';

import Menu from '../Pages/Menu';
import { Link } from 'react-router-dom';

import LastCart from './LastCart';

function CartCompo() {
  
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cart);
  const ClearCart = () => {dispatch(clearCart())}
  const totalqty = cartItems.reduce((totalqty,item) => totalqty+item.qty, 0)
  const totalPrice = cartItems.reduce((totalPrice,item) => totalPrice + (item.qty * item.price) +10,0)
  const subtotal = cartItems.reduce((subtotal,item)=> subtotal+item.qty * item.price,0)
  const gst = cartItems.reduce((gst,item) => gst + (item.qty* item.price)*0.05,0)
  return (
    <>
<div className=' mx-44'>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" alt="" />
            <h1 className='text-4xl  font-extrabold text-gray-800'>MY CART</h1>
         
        </div> 
        {cartItems.length>0 ? <div className="container flex">
 <div className="left mt-5 ml-9">
        {cartItems.length> 0 ?
          cartItems.map((food) => {
            return <ItemCart
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img} 
            qty={food.qty}
            />
          }): ""
        }
         <div className='flex  ml-20 w-[45vw] h-[10vh] gap-96 px-10 '><div className="RemoveAll  "><button 
           onClick={()=> ClearCart()}
         className='text-[#494949] font-semibold'>Remove All</button></div>
        <Link to="/Menu"><div className="more h-12 w-32 rounded-3xl pt-3 pl-5 text-[#494949] font-semibold border-[1px] border-solid border-[black] bg-white hover:bg-black hover:text-white hover:border-none "><button 
        
        >
          Add More</button></div></Link>
        </div>
        
        </div>
       
       {cartItems.length>0 ?<div className='flex right justify-around  w-full ' >
      
         <div className="summaryCard bg-white shadow-lg w-[25vw] sticky ml-14 h-[67vh] mb-5  rounded-md">
         
        <h2 className='font-bold mt-10 ml-10 text-2xl'>{totalqty} ITEM</h2>
        <div className="summaryContent mt-10 ">
          <div className="first flex  gap-52">
            <div className='ml-10'>subtotal</div>
            <div>₹{subtotal}</div>
          </div>
          <div className="second flex  gap-60 ">
            <div className='ml-10'>GST</div>
            <div>{gst}</div>
          </div>
        </div>
        <hr  className='mt-10'/>
        <button className='bg-[#e4002b] rounded-2xl  text-white mt-40 w-[18vw] h-10 ml-12'>
         <div className='flex justify-around'><div>checkout</div>
         <div>₹{totalPrice}</div></div> 
        </button>
       </div>
       </div>
   : ""}
   </div> 
  :<> <div className='h-[80vh] w-[100vw] bg-[#f8f7f5] mt-6 flex'>
    <div className='Left w-[65vw] '>
      <div className="header h-[35vh] w-[55vw] ml-24 mt-56 pt-16 font-extrabold text-5xl ">YOUR CART IS EMPTY. LET'S START AN ORDER!
        
      </div>
      <Link to='/Menu'><button className='bg-[#e4002b] rounded-3xl h-12 w-40 hover:bg-red-700 ml-24'><span className='text-white'>Start Order</span></button></Link>
    </div>
    <div className='right w-[35vw] '>
      <img src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" alt="" />
    </div>
    </div>
   
 </>}
  
  </>
    
  )
}

export default CartCompo