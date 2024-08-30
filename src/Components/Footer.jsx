import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className='border-y'>
    <div className=' w-full bg-[#202124] h-[50vh] flex pt-20 pl-72 gap-10'>
    <div className="photo">
      <img  className='gap-11'  src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="" />
    </div>
<div className="left1 text-[#dbdbdb] text-left">
KFC India
<ul className='mt-2' >
  <li className='mt-2'>
    <Link>
    About KFC
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    KFC Care
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Careers
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Our Golden Past
    </Link>
  </li>
</ul>

</div>
<div className="left2 text-[#dbdbdb] text-left">
Legal
<ul className='mt-2'>
  <li className='mt-2'>
    <Link>
    Terms and Conditions    </Link>
  </li>
  <li className='mt-2'>
    <Link>
   Privacy Policy
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Disclaimer
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Caution Notice
    </Link>
  </li>
</ul>

</div>
<div className="left3 text-[#dbdbdb] text-left">
  KFC Food
<ul className='mt-2'>
  <li className='mt-2'>
    <Link>
    Menu
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
   Order Lookup
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Gift Card
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Nutrition & Allergen
    </Link>
  </li>
</ul>

</div>
<div className="left4 text-[#dbdbdb] text-left">
<ul className=''>
  Support
  <li className='mt-2'>
    <Link>
    Get Help
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Contact Us
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    KFC Feedback
    </Link>
  </li>
  <li className='mt-2'>
    <Link>
    Privacy Policy
    </Link>
  </li>
</ul>

</div>
   </div>
   <div className="column bg-[#202124] text-[#dbdbdb]">
   <p class="copyright-text">Copyright © KFC Corporation 2024 All rights reserved</p>
   </div>
</footer>
  );
}

export default Footer