import React from 'react'
import './Featured.css'

import dubai from '../../assets/dubai.jpg'
import england from '../../assets/uk.jpg'
import germany from '../../assets/germany.jpg'
import useFetch from '../../hooks/useFetch'

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Mumbai,Delhi,Chaneti")
  return (
    <div className="featured">
        {loading ? "Loading...Please be patient" : <><div className='featuredItem'>
            <img src={dubai} alt='dubai' className='featuredImg' />
            <div className='featuredTitle'>
                <h2>Mumbai</h2>
                {data[0] === 1 ? <h3>{data[0]} Property</h3> : <h3>{data[0]} Properties</h3>}
            </div>
        </div>
        <div className='featuredItem'>
            <img src={england} alt='dubai' className='featuredImg' />
            <div className='featuredTitle'>
                <h2>Delhi</h2>
                {data[1] === 1 ? <h3>{data[1]} Property</h3> : <h3>{data[1]} Properties</h3>}
            </div>
        </div>
        <div className='featuredItem'>
            <img src={germany} alt='dubai' className='featuredImg' />
            <div className='featuredTitle'>
                <h2>Chaneti</h2>
                {data[2] === 1 ? <h3>{data[2]} Property</h3> : <h3>{data[2]} Properties</h3>}
            </div>
        </div></>}
    </div>
  )
}

export default Featured