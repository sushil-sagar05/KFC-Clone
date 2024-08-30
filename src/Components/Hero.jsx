import React from 'react'
import { Link } from 'react-router-dom'
import Categories from './Categories'
import HeroDeals from './HeroDeals'
import BottomNav from './BottomNav'

const Hero = () => {
  return (
    <>
    <div className="hero-section h-[88vh] static ">
      <div className="lower">
        <Link to= '/Menu'>
<img  className='h-[65vh] '
src=' https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=400&fit=fill&fm=webp'
/>
</Link>
      </div>
    </div>
    <div className="generic-container ml-[270px] ">
      
  <h2 className='font-semibold text-4xl mb-16 ml-32 '>BROWSE CATEGORIES <hr ></hr> </h2>
   <div className=' flex flex-wrap'>
   
    <Categories
   
    />
   </div>
   </div>
   <HeroDeals/>
   </>
  )
}

export default Hero