import React from 'react'
import './PropertyList.css'

import hotel from '../../assets/hotel.jpg'
import cabin from '../../assets/cabin.jpg'
import villa from '../../assets/villas.jpg'
import resort from '../../assets/resort.jpg'
import apartment from '../../assets/apartment.jpg'
import useFetch from '../../hooks/useFetch'

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType")
  const images = [
    hotel,
    cabin,
    villa,
    resort,
    apartment
  ]
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitle">
                  <h2>{data[i]?.type}</h2>
                  <h3>{data[i]?.count} {data[i]?.type}</h3>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;