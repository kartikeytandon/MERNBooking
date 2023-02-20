import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/Footer/Footer'

import './Home.css'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <div className='homeContainer'>
          <Featured />
          <h1 className='homeTitle'>Browse by property type</h1> 
          <PropertyList />
          <h1 className='homeTitle'>Home guests love</h1>
          <FeaturedProperty />
          <MailList />
          <Footer />
        </div>
    </>
  )
}

export default Home