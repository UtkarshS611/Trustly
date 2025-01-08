import React from 'react'

const Hero = () => {
  return (
    <section className='overflow-hidden relative h-screen pt-20'>
        <div className='uppercase flex flex-col text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>
            <span className='text-center'>Achieve your dream</span>
            <span className='text-center'>job safely and effortlessly</span>
        </div>
        <div className='opacity-60 flex flex-col text-center mt-6'>
            <span>with personiled insights, application information, company authenticity at your fingertips</span>
            <span>We make it easier for you to check job post authenticity while you focus on your skills.</span>
        </div>
        <div className='flex justify-center mt-8'>
            <input type="text" placeholder='Username / Email' className='outline-none rounded-l-full bg-white/10 px-4 py-2'/>
            <button className='bg-white/80 text-black rounded-r-full px-4 py-2'>Get started</button>
        </div>
        <div className='w-[80%] h-[60vh] border-[5px] border-[#3BD6FF] border-opacity-70 mx-auto absolute bottom-[0] rounded-2xl left-[50%] translate-x-[-50%]'>
        </div>
    </section>
  )
}

export default Hero