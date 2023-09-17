import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'


const SocialLinks = () => {

        const links = [
            {
                id:1,
                child:(
                    <>
                Linkedin <FaLinkedin size={30} />
                </>
                ),
                href: 'https://www.linkedin.com/in/sandro-gataric-527964274/',
                style: 'rounded-tr-md'
            },
            {
                id:2,
                child:(
                    <>
                GitHub <FaGithub size={30} />
                </>
                ),
                href: 'https://github.com/Sandro2906',
                
            },
            {
                id:3,
                child:(
                    <>
                E-mail <HiOutlineMail size={30} />
                </>
                ),
                href: 'mailto:sandro.yt29@gmail.com',
                
            },
          

        ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] fixed left-0 '>
        <ul> 
            {
                links.map((link)=>(
                 <li key={link.id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded hover:ml-[-10px] duration-150 bg-gray-500' >
                    <a href={link.href} 
                    className=' flex justify-between items-center w-full text-white'
                    target='_blank' rel="noreferrer">
                    {link.child}
                    </a>
                </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialLinks