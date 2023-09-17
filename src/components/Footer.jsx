import React from 'react'
import Instagram from '../assets/584856b4e0bb315b0f7675ac.png'
import Linkedin from '../assets/5ecec78673e4440004f09e77.png'
import Email from '../assets/download.png'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className='w-full h-auto px-4 flex flex-col md:flex-row bg-white justify-around items-center'>
        <div className='w-[400px] h-[220px] flex flex-col mt-10'>
            <h1 className='font-boldText text-4xl pb-5 '>CONTACT</h1>
            <p>If you want to contact me in some other way, you can contact me on Instagram, Linkedin or e-mail.</p>
        </div>
        <div className='w-[400px] h-[200px] flex flex-col justify-center p-3 md:mt-10 md:pb-5'>
        <h1 className='text-4xl font-boldText pb-5'>Social networks</h1>
        <div className='flex items-center'><img src={Email} alt='Linkedin' className='w-[50px]'/><a href='https://www.linkedin.com/in/sandro-gataric-527964274/'> <h1 className='pl-5'>Linkedin</h1></a></div>
        <div className='flex items-center py-3'><img src={Linkedin} alt='Instagram' className='w-[55px] pr-1'/><a href='https://www.instagram.com/sandro_photographyy/'> <h1 className='pl-5'>Instagram</h1></a></div>
        <div className='flex items-center'><img src={Instagram} alt='Email' className='w-[50px]'/> <h1 className='pl-5'>sandro.yt29@gmail.com</h1></div>
        </div>
        <div className='w-[400px] h-[200px] flex flex-col justify-center p-3 mt-10'>
        <h1 className='mb-3'>© 2023 Sandro Portfolio</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms of Service</h1>
        <h1>FAQs or Help Center</h1>
       <Link to='home' smooth duration={500}><h1 className='font-boldText cursor-pointer text-3xl pt-3'>BACK TO TOP</h1></Link>
        </div>
    </div>
  )
}

export default Footer
