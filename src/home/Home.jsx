import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { FreeBook } from '../components/FreeBook'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <FreeBook/>
        <Footer/>
    </>
  )
}
