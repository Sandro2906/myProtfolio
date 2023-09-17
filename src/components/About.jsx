import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-auto py-14 px-10 bg-red-700 text-white justify-center'>

        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center h-full pt-4'>
            <div className='pb-8'>
                <h1  className='text-4xl font-boldText inline border-b-4 border-gray-800'>About</h1>
            </div>

              <p className='text-xl'>
              Hello, my name is Sandro Gataric. I live in Bosnia and Herzegovina. I deal with front-end web programming. I study programming and software engineering at Apeiron University in Banja Luka. I have one year left until graduation.
              </p>
               <p className='text-xl '>
              This website is just one example of my knowledge of React front-end programming. The website is designed using React and tailwind CSS. The website is flexible, i.e., adapted for mobile phones.
              </p>
              <p className='text-xl pt-3'>
              I've been a dedicated photographer for over four years, capturing the beauty of moments, places, and people through my lens. Over this time, I've had the privilege of conducting around 150 photoshoots, each one a unique and inspiring experience.</p>
              <p className='text-xl pt-3'> Apart from photography, I have a few other passions that keep me engaged and energized:</p>
              <p className='text-xl'>  I've been deeply immersed in the world of basketball for over 5 years. It's not just a sport for me; it's a passion that has shaped my life. I've honed my skills on the court, embracing the precision of shots and the camaraderie of the team.</p>
              <p className='text-xl'>I also like to play table tennis, chess and workout in gym.</p>
        </div>

    </div>
  )
}

export default About
