import React,{useEffect,useState} from 'react'

import CategoryCard from './HeroDeals';
import Menu from '../Pages/Menu';

import { Link } from 'react-router-dom';

import pages from '../Pages/Menu'

function Categories() {
        const[data , setData] = useState([])
 async function FetchMenu() {
        let data = await fetch("https://orderserv-kfc-apac-olo-api.yum.com/dev/v1/catalogs/15895bb59f7b4bb588ee933f8cd5344a/KFCIndiaMenu-Generic")
        let res = await data.json();
   
        setData(res.categories[0].categories)
        


   
    }
    useEffect(()=> {
            FetchMenu()
    },[])
  
  

 return(
        <>
{
    data.map((object,index) => {
        if(index >= 1 &&  index <= 7) {
 return(
               <Link to={"/Menu" +"/"+`${object?.name.toLowerCase().replace(/ /g, "-")}`}>
               <div className='h-[19.5vw] w-[19.5vw] rounded-md '>
   <div className='cursor-pointer bg-[#f8f7f5]  h-[17.5vw] w-[17.5vw] rounded-md'>
                <img  className='rounded-sm'
       src={ object?.content?.image?.mainImage} alt="" />
           
                <h3 className='font-extrabold items-center text-center my-6'>{object?.name}</h3>
                </div>
   </div>
   </Link>
 ) 

}
if(index >7 && index <=8 ){
        return (
        <Link  to="/Menu" className='h-[19.5vw] w-[19.5vw] rounded-md'>
        <div className='bg-[#f8f7f5]  h-[17.5vw] w-[17.5vw] rounded-md '>
            <img  className='rounded-sm py-14 w-[13.5vw] px-2'
            src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt="" />
  
<div className='flex justify-center items-center text-center'>
   <h2 className='font-semibold text-center '>view All menu</h2>
   <span><img  className='mt-1 ml-1'
   src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg" alt="" /></span>
</div>
        </div>
        </Link>
        )
}
    
  }  )
}

</>
 
 )
}

export default Categories