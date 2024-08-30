import React, { useState,useEffect } from 'react'
import CategoryMenu from './CategoryMenu';
import Menu from '../Pages/Menu';


function CategoryItems() {
   
    async function FetchMenu() {
        const MenuData = await fetch("https://orderserv-kfc-apac-olo-api.yum.com/dev/v1/catalogs/15895bb59f7b4bb588ee933f8cd5344a/KFCIndiaMenu-Generic")
        const res = await MenuData.json();
   console.log(res.categories[0].categories)
  
        
        


   
    }
    useEffect(()=> {
            FetchMenu()
    },[])
  
  return (
    <>
    {
   MenuData.map((object)=> {
    return <h2>mai hu jiyan</h2> 
   }
)
    }
  </>
  )
}

export default CategoryItems