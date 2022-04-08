import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}
