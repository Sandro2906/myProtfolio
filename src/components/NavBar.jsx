import React, { useState, useEffect } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

import 'aos/dist/aos.css'
import Aos from 'aos';

const NavBar = () => {

  useEffect(()=>{
    Aos.init({duration:200})
  },[])

    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="
    flex 
    justify-between 
    items-center 
    w-full 
    h-20 
    px-4
    bg-red-700
    text-white 
    fixed z-20">

      <div>
        <h1 className="
        text-5xl 
        font-boldText
        ml-2">Sandro</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
         <li key={id} className='
         p-4 
         font-boldText
         capitalize
        text-white 
        hover:scale-150 
        duration-200 cursor-pointer'>
           <Link to={link} smooth duration={500}>{link}</Link>
         </li>
        ))}
      </ul>
     

            <div onClick={()=> {setNav(!nav)}} className='
            md:hidden 
            cursor-pointer 
            pr-4 
            z-10 
            text-gray-500'>
            {nav ? <FaTimes data-aos="fade-up"   size={30}/> : <FaBars size={30} />}
            </div>

            {
              nav &&(
                <ul data-aos="fade-down" className='
                flex 
                flex-col 
                justify-center 
                items-center 
                top-0 
                left-0 
                absolute 
                w-full 
                h-screen 
                bg-red-700'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer font-boldText capitalize py-6 text-4xl'>
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                 ))}
                </ul>

              )
            }

      </div>
 
  )
}

export default NavBar