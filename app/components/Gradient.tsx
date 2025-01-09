import React from 'react'

const Gradient = () => {
  return (
    <div className='h-screen w-full fixed z-[-1]'>
        <div className='h-40 w-[30vw] bg-[#3BD6FF] absolute right-0 top-32 blur-[300px]'/>
        <div className='h-40 w-[30vw] bg-[#3BD6FF] absolute left-0 bottom-32 blur-[300px]'/>
    </div>
  )
}

export default Gradient