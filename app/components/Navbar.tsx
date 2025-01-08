import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between px-4 py-8 items-center relative'>
            <div className='flex gap-2'>
                <span className='bg-white/10 shadow py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer'>
                    <div className='bg-[#3BD6FF] h-2 w-2 rounded-full'/>
                    Home
                </span>
                <span className='py-2 px-4 rounded-full cursor-pointer'>Features</span>
                <span className='py-2 px-4 rounded-full cursor-pointer'>FAQs</span>
            </div>
            <div className='flex items-center gap-0.5 absolute left-[50%] translate-x-[-50%]'>
                <Image
                src={'/logo.svg'}
                alt='Logo'
                height={30}
                width={30}
                />
                Trustly
            </div>
            <div>
                <button className='bg-white/10 py-2 px-4 rounded-full flex items-center gap-1 shadow'>Login / Register</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar