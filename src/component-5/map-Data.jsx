import React, { useState } from 'react'
import { CardsData } from './cards-Data'
import { FilterData } from './input'
import { Link } from 'react-router-dom'
const MapData = () => {
  const [filteredData, setFilteredData] = useState(CardsData);

  return (

    <div className="container-fluid">
      <FilterData setFilteredData={setFilteredData} />
      <div className='row bg-black py-3 align-items-center '>
        {
          filteredData?.map((card) =>
            <div className="col-3 bg-danger m-1 bg" key={card?.id} >
              <Link to={`/detail-page/${card.id}`}>
                <img src={card?.image} alt={card?.image} />
              </Link >
              <p>{card?.paragraph}</p>
            </div>
          )}

      </div>
    </div>


  )
}

export { MapData }