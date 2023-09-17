import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto bg-black py-14 text-white px-9'>

      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full '>
        <div className='pb-8'>
          <p className='text-7xl font-boldText inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me.</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/68f43bd1-4849-4ca1-8d09-aafcdada77b4' method='POST' className='flex flex-col w-full md:w-1/2 text-white' >
            <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type='text' name='email' placeholder='Enter your e-mail' className='p-2 bg-transparent border-2 rounded-md text-black my-4 focus:outline-none' />
            <textarea name='message' placeholder='Enter your message' rows={10} className='p-2 border-2 rounded-md bg-transparent focus:outline-none' />
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 mx-auto flex items-center px-8 py-3 my-8 rounded-md hover:scale-110 duration-300'>SUBMIT</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Contact;
