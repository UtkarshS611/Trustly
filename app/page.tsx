import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Features from './components/Features'

const Home = () => {
  return (
    <div className='text-white/85'>
      <main className='max-h-screen overflow-hidden'>
        <Navbar/>
        <Hero/>
      </main>
      <Features/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home