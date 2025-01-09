import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Features from './components/Features'
import Gradient from './components/Gradient'
import ScrollToTop from './components/ScrollToTop'

const Home = () => {
  return (
    <div className='text-white/85'>
      <ScrollToTop/>
      <Gradient/>
      <main>
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