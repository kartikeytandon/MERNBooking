import React, { useState } from 'react'
import './Hotel.css'
import Navbar  from '../../components/Navbar/Navbar'
import Header  from '../../components/header/Header'
import MailList  from '../../components/mailList/MailList'
import Footer  from '../../components/Footer/Footer'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

import { ImLocation2 } from 'react-icons/im';
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

const Hotel = () => {
  const location = useLocation()
  console.log(location)
  const id = location.pathname.split('/')[2]
  console.log(id)
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)

  const handleOpen = (i) => {
    setOpen(true)
    setSlideNumber(i)
  }   


  // const photos = [
  //   {
  //     src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     src: 'https://www.testingdocs.com/questions/wp-content/uploads/Array-with-Random-values.png'
  //   },
  //   {
  //     src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  // ]


  return (
    <div>
      <Navbar />
      <Header props="list" />
      {loading ? "loading": <><div className="hotelContainer">
        {open && <div className="slider">
          <AiFillCloseCircle className='close' onClick={() => setOpen(false)} />
          <FaArrowAltCircleLeft className='arrow' onClick={() => slideNumber === 0 ? setSlideNumber(5) : setSlideNumber(slideNumber+1)} />
          <div className="sliderWrapper">
            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
          </div>
          <FaArrowAltCircleRight className='arrow' onClick={() => slideNumber === 5 ? setSlideNumber(0) : setSlideNumber(slideNumber+1)} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <ImLocation2 />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - {data.distance}m from center
          </span>
          <span style={{ color: '#008009', fontWeight: '600' }} className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className='hotelTitle'>{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night Stay!</h1>
              <span>
                Located in Karow, this property has an excellent location store of 9.8!
              </span>
              <h2 style={{ fontWeight: '300' }}>
                <b>$234</b> (9 Nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        {/* <div className='mailAndFooter'> */}
          <MailList />
          <Footer />
        {/* </div> */}
      </div></>}
    </div>
  )
}

export default Hotel