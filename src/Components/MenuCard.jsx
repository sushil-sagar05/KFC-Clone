import React,{useState,useEffect} from 'react'
import MenuItems from './MenuItems';


function MenuCard({categories, products}) {
  const[data,setData] = useState([])
  async function FetchMenu() {
    
    const data = await fetch("https://orderserv-kfc-apac-olo-api.yum.com/dev/v1/catalogs/15895bb59f7b4bb588ee933f8cd5344a/KFCIndiaMenu-Generic")
    const res = await data.json();
console.log(res.categories[0].categories[1].products)
    setData(res.categories[0].categories[1].products)
    



}
useEffect(()=> {
        FetchMenu()
},[])

  return (
    <>
    
     <div className=' flex flex-wrap'> <MenuItems/></div>
       
    
    </>
  )
}

export default MenuCard