"use client"

// import Image from 'next/image';

import { useRouter } from 'next/navigation';
import React from 'react'

const Hero = () => {

    const router = useRouter();

    const handleclick = () => {
        router.push('/sign-in')
    }

  return (
    <section className='pt-20'>
        {/* <div className={`absolute text-red-600 text-center duration-100 bg-red-400/10 overflow-hidden left-[50%] translate-x-[-50%] top-[10vh] rounded-[8px] px-4 py-1`}>Someting went wrong
        </div> */}
        <div className='uppercase flex flex-col text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>
            <span className='text-center leading-relaxed'>Achieve your <span className='hero-gradient'>dream</span></span>
            <span className='text-center'>job safely and effortlessly</span>
        </div>
        <div className='opacity-60 flex flex-col text-center mt-6'>
            <span>with personiled insights, application information, company authenticity at your fingertips</span>
            <span>We make it easier for you to check job post authenticity while you focus on your skills.</span>
        </div>
        <div className='flex justify-center mt-8'>
            <button onClick={handleclick} className='bg-white/10 shadow py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer'>Get started</button>
        </div>
        <div className='w-[80%] h-[50vh] md:h-[60vh] lg:h-[80vh] border-[5px] border-[#3BD6FF] border-opacity-70 mx-auto rounded-2xl overflow-hidden mt-20 bg-[url("/heroImage.jpg")] bg-no-repeat bg-cover'> 
        </div>
    </section>
  )
}

export default Hero