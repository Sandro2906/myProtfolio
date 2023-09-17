import React, { useEffect } from 'react';
import fitness from '../assets/ssss.PNG'
import weatherApp from '../assets/weatherApp.png'
import Nothing from '../assets/Nothing_whitespace_blank.png'
import Guarana from '../assets/main_en_1581299777_brainer.png'

import 'aos/dist/aos.css'
import Aos from 'aos';

const Portfolio = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const portfolios = [
        {
            id:1,
            src: Guarana,
            webSite: 'https://guarana-web-site.vercel.app/?fbclid=IwAR0UaQaPpn7fkALYyr9-h1-wpU4-Ak-2iXIbiBhTgSYNEgGblnBz1YYC568',
            code: 'https://github.com/Sandro2906/GuaranaWebSite2'
           
        },
        {
            id:2,
            src:weatherApp,
            webSite: 'https://weather-app-beryl-beta.vercel.app/?fbclid=IwAR1J2r8c94b7gn7GlScDG97P14_fG9kWhiTobitNBnt47I3tubdxsSGjcxQ',
            code: 'https://github.com/Sandro2906/WeatherApp'
        },
        {
            id:3,
            src:fitness,
            webSite: 'https://web-fitness-six.vercel.app/?fbclid=IwAR3UthLxdPyytR1lUFrCvf0o-3P0J7NijXRlvAasvamYquKWJv674rnEvWY',
            code: 'https://github.com/Sandro2906/webFitness'
            
        },
        {
            id:4,
            src:Nothing
        },
        {
            id:5,
            src:Nothing
        },
        {
            id:6,
            src:Nothing
        },
    ]

  return (
    <div name='portfolio' className=' md:pl-24 md:pr-24 bg-red-600 w-full py-28 text-white h-auto'>
        <div className='max-w-screen-large p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p data-aos="fade-left" className='text-7xl font-boldText'>PortFolio</p>
                <p data-aos="fade-right" className='py-6 text-2xl'>Check some of my work here.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id,src,webSite, code})=>(
                    
                    <div data-aos="zoom-in-up" key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                        <img src={src} alt='img' className='rounded-md duration-200 w-full h-48 object-cover hover:scale-105' />
                        <div className='flex items-center justify-center'>
                        <a href={webSite}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                        <a href={code}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a> 
                        </div>
                    </div>
                ))
            }
             </div>
        </div>
    </div>
  )
}

export default Portfolio;
