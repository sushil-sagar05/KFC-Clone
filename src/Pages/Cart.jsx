import React,{useState} from 'react'
import {IoMdClose} from 'react-icons/io'

import CartCompo from '../Components/CartCompo'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


function Cart() {
   
  return (
   <><Navbar/>
   <CartCompo/>
   <Footer/>
    </> 
  )
}

export default Cart