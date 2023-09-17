import React, { useEffect } from 'react';
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Git from '../assets/github.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import Reacty from '../assets/react.png'
import Java from '../assets/Java_programming_language_logo.svg.png'
import VisualBasic from '../assets/visual-basic-906838_960_720.png'


import 'aos/dist/aos.css'
import Aos from 'aos';

const Experience = () => {

  const links = [
    {
      id:1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-300'
    },
    {
      id:2,
      src: Css,
      title: 'CSS',
      style: 'shadow-blue-400'
    },
    {
      id:3,
      src: JavaScript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-400'
    },
    {
      id:4,
      src: Git,
      title: 'GIT',
      style: 'shadow-gray-600'
    },
    {
      id:5,
      src: Node,
      title: 'NODE',
      style: 'shadow-green-400'
    },
    {
      id:6,
      src: Tailwind,
      title: 'TAILWIND',
      style: 'shadow-blue-100'
    },
    {
      id:7,
      src: Reacty,
      title: 'REACT',
      style: 'shadow-blue-300'
    },
    {
      id:8,
      src: Java,
      title: 'JAVA',
      style: 'shadow-orange-300',
      imgs:'h-24 w-14'
    },
    {
      id:9,
      src: VisualBasic,
      title: 'VISUAL BASIC',
      style: 'shadow-gray-500'
    }

  ]

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div name='experience' className='bg-black w-full h-auto py-14'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p data-aos="fade-left" className='text-4xl font-boldText p-2 '>Programming Languages and Tools Expertise</p>
          <p data-aos="fade-right" className='py-10 font-digital text-2xl'>I possess a diverse skill set encompassing various programming languages, tools, and frameworks, enabling me to tackle a wide range of software development projects effectively. Here is an overview of my expertise:</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            links.map(({id,src,title,style,imgs})=>(
              <div data-aos="fade-up" key={id} className={`shadow-md rounded-lg hover:scale-105 duration-500 py-2 round-lg ${style}`}>
              <img src={src} alt=''className={`w-20 mx-auto ${imgs}`} />
              <p className='mt-4 font-digital text-2xl'>{title}</p>
            </div>
            ))
          }
         
        </div>
      </div>
    </div>
  )
}

export default Experience;
