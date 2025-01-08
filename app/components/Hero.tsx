"use client"

import React from 'react'

const Hero = () => {

    const [element, setElement] = React.useState(false);

  const handleClick = () => {
    setElement(true);

    setTimeout(() => {
        setElement(false);
      }, 2000); 
  };

  return (
    <section className='pt-20'>
        <div className={`absolute text-red-600 text-center duration-100 bg-red-400/10 overflow-hidden left-[50%] translate-x-[-50%] top-[10vh] rounded-[8px] px-4 py-1 ${element? "h-[2rem] w-[11.9rem] opacity-100" : "w-0 h-0 opacity-0"}`}>Someting went wrong
        </div>
        <div className='uppercase flex flex-col text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>
            <span className='text-center leading-relaxed'>Achieve your dream</span>
            <span className='text-center'>job safely and effortlessly</span>
        </div>
        <div className='opacity-60 flex flex-col text-center mt-6'>
            <span>with personiled insights, application information, company authenticity at your fingertips</span>
            <span>We make it easier for you to check job post authenticity while you focus on your skills.</span>
        </div>
        <div className='flex justify-center mt-8'>
            <input type="text" placeholder='Username / Email' className='outline-none rounded-l-full bg-white/10 px-4 py-2'/>
            <button onClick={handleClick} className='bg-white/80 text-black rounded-r-full px-4 py-2'>Get started</button>
        </div>
        <div className='w-[80%] h-[50vh] md:h-[60vh] lg:h-[80vh] border-[5px] border-[#3BD6FF] border-opacity-70 mx-auto rounded-2xl mt-20'>
        </div>
    </section>
  )
}

export default Hero