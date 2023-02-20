import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featuredProperty.css'

const FeaturedProperty = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4")
  return (
    <div>
      <div className="fp">
      { loading ? "Loading...Please be patinet" : 
      <>
        {data.map(item=>(

          <div className="fpItem" key={item._id}>
          <img
            // src={item.photos[0]}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0szgOQjoMtERPPGc94M59ryDj0IJgtUhlmALZEBY&s"
            alt=""
            className="fpImg"
            />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating && <div className="fpRating">
            <button>{item.rating}</button>
            <span>{item.desc}</span>
          </div>}
         </div>
        ))}
      </>}
    </div>
    </div>
  )
}

export default FeaturedProperty