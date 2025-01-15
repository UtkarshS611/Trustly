import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Footer/>
      </main>
    </>
  )
}

export default Home