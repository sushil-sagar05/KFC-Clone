import React,{useState,useEffect} from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../Redux/Slices/CartSlice'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function MenuItems() {

  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
    const[data,setData] = useState([])
    async function FetchMenu() {
      
      const data = await fetch("https://orderserv-kfc-apac-olo-api.yum.com/dev/v1/catalogs/15895bb59f7b4bb588ee933f8cd5344a/KFCIndiaMenu-Generic")
      const res = await data.json();
  
      setData(res.categories[0].categories[2].products)
      
  
  
  
  }
  useEffect(()=> {
          FetchMenu()
  },[])
  return (
    <>
     
         {
          
    data.map((products) => {
      return <>
   
       <div className="productContainer  sticky flex flex-wrap  w-[46.5%] h-[85vh] ">
          <div className="productCard  w-[86.5%] h-[500px] bg-[#f8f7f5] rounded-md  mb-[30px]">
          <img  className='rounded-md' src={ products?.content?.image?.mainImage} alt="" />
          <div className="productCardContnet">
            <div className="header  font-bold leading-[24px] text-[#202124] mt-[5px]">{products.name}</div>
         <img src="" alt="" />
         <div className="veg-Nonveg">Non-Veg</div>
         <div className="productPRice">
          <span className='font-bold'>₹ {products?.items[0]?.additionalProperties[3]?.value.slice(0,3)+"."+"05"}</span>
         </div>
         <div className="productDesc leading-[24px] overflow-hidden text-ellipsis text-[#494949]">
        {products?.shortDescription[0]?.value}
        
         </div>
         
          </div>
        <div className='flex justify-center items-center mx-5'>
          <div className=" AddToCartBtn mt-5  p-0 w-[90%]">
      <button
            onClick={()=> {
              dispatch(addToCart({id:products.id,name: products.name,qty:1,img:products?.content?.image?.mainImage,price:products?.items[0]?.additionalProperties[3]?.value.slice(0,3)+"."+"05" }))
        
            }}
            className='h-[44px] flex w-[184px] p-[11px 40px] text-white bg-[#e4002b] border-[1px] border-solid border-[#e4002b] pt-3 gap-2 justify-center rounded-[10rem]'> Add to cart
              <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" alt="" />
            </button>
            
          </div>
          </div>
          </div>
         
        </div> 
      </>
    })
   }
 </>
  )
}

export default MenuItems