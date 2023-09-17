import React, { useEffect } from 'react'
import Avatar from '../assets/mojavatar.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div name='home' className='h-auto w-full bg-white py-24 md:h-screen'>

      <div className='text-white max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div data-aos="fade-up" className='flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl text-black font-boldText'>I'm a Frontend Developer</h1>
            <p className='text-gray-400 py-4 max-w-md'>
            Hello, my name is Sandro Gataric, I live in Bosnia and Herzegovina.
                I deal with frontend, web programming.
                I study programming and software engineering
                 at Apeiron University in Banja Luka.
                He has one year left until graduation. I hope to be a full stack developer in the future.
            </p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-cyan-800 cursor-pointer'>
                    Portfolio <span className='group-hover:rotate-90 duration-150'> <MdKeyboardArrowRight size={25} className='ml-1'/> </span> 
                </Link>
            </div>
        </div>

        <div data-aos="fade-right">
            <img src={Avatar} alt='pic-of-me' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>

    </div>
  )
}

export default Home
