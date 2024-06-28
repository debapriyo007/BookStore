import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBoook from '../components/FreeBoook'
import Footer from '../components/Footer'
import Features from '../components/Features'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    {/* <Features/> */}
    <FreeBoook/>
    <Footer/>
    
    </>
  )
}

export default Home