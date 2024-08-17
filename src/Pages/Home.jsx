import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import NewsSection from '../Components/NewsSection/NewsSection'

function Home({setCategory, category}) {



  return (
    <>
    <Hero />
    <NewsSection setCategory={setCategory} category={category}/>
    <Footer/>
    </>
  )
}

export default Home
