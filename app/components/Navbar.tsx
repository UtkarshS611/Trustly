import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between px-4 py-8 items-center'>
            <div className='flex gap-2'>
                <span className='bg-white/10 py-2 px-4 rounded-full flex items-center gap-1'>
                    <div className='bg-[#3BD6FF] h-2 w-2 rounded-full'/>
                    Home
                </span>
                <span className='py-2 px-4 rounded-full'>About</span>
                <span className='py-2 px-4 rounded-full'>Services</span>
            </div>
            <div className='flex items-center gap-0.5'>
                <Image
                src={'/logo.svg'}
                alt='Logo'
                height={30}
                width={30}
                />
                Trustly
            </div>
            <div>
                <button className='bg-white/10 py-2 px-4 rounded-full flex items-center gap-1'>Login / Register</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar