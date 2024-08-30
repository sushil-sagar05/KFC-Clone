import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import MenuItems from '../Components/MenuItems';
import MenuCard from '../Components/MenuCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



function Menu() {
  const[data,setData] = useState([])
  async function FetchMenu() {
    
    const data = await fetch("https://orderserv-kfc-apac-olo-api.yum.com/dev/v1/catalogs/15895bb59f7b4bb588ee933f8cd5344a/KFCIndiaMenu-Generic")
    const res = await data.json();
console.log(res.categories[0].categories)
    setData(res.categories[0].categories)
    



}
useEffect(()=> {
        FetchMenu()
},[])

  
  return (
   <>
<Navbar/>
   <div className="container pl-[1.25rem]  pr-[1.25rem] max-w-[1180px] w-[100%] ml-auto mr-auto ">
    <div className="minus-container flex ml-[-15px]  mr-0 ">
     
          <div className="left sticky h-[100vh] w-[18vw] ml-[0.8%]  top-[100px] ">
            <div className="upper w-[100%] mb-[6.5%]  bg-transparent mr-[-15px] ml-[-15px] ">
              <img className=''
              src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="" />
          <h2 className='font-bold text-2xl m-0 pb-[1vw]'>KFC MENU</h2>
          
 <ul className='mb-[1rem] '>
  {
    data.map((object,index) => {
      if(index >=1 && index <12)
      return <li className='font-semibold  text-[16px] text-[#494949] m-0 leading-[1.5] text-base  pt-[3.600px] pb-[19.040px]'>{object?.name}</li> 
   
    })
  }

</ul>
            </div>
          </div>
      <div className="right mt-[6.3%] ml-0 max-w-[75%] w-[100%] pr-[15px] pl-[15px] relative ">
        <div className="search-filter flex  w-[96%] pb-[15px] pl-0 pr-0  justify-between">
            <div className="search text-[#212529] ">
              <input className='border-[1px] border-[#e3e3e3]  border-solid h-[36px] w-[201px] pt-[9px] pr-[55px] pb-[9px] pl-[40px] font-[500] text-[12px] text-[#202124] rounded-3xl text-left align-middle'
               type="search" placeholder='search our menu'/>
               <span className="search absolute left-[22px] top-[11px] ">
                <img className='align-middle' src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg" alt="" />
               </span>
            </div>
        </div>
       <hr  />
       <div className="row mt-[7%] mr-[-15px] ml-[-15px] ">
<div className="Large-menu bg-[#f8f7f5]  pl-[2vw] w-[100%] rounded-lg">
{
        data.map((object,index) => {
            if(index >=1 && index <12)
         
          return <>
          <div className="categoryName font-extrabold leading-[58px] pt-[2.25rem]">{object?.name}
        </div>
       <div className='flex flex-wrap'>
        <MenuCard />
        </div>
           </>
        })
      }

</div>



       </div>
      </div>
    </div>
   </div>
 <Footer/>
   </>
  )
}

export default Menu
