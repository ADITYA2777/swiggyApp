import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_URL } from '../helper/Restraunts-List';
import ShimmerUi from './ShimmerUI';
import useRestaurants from '../helper/UseRestaurants';

const RestaurantsMenu = () => {

       const { resId } = useParams();
     
  const RestaurantsMenu = useRestaurants(resId)
  
  return (!RestaurantsMenu) ? (
    <ShimmerUi />
  ) : (
    <div>
      <div>
        <h1>Restaurant :Id {resId}</h1>
        <h2>{RestaurantsMenu.name}</h2>
        <img src={IMG_URL + RestaurantsMenu.cloudinaryImageId} />
        <h3>{RestaurantsMenu.area}</h3>
        <h3>{RestaurantsMenu.city}</h3>
        <h3>{RestaurantsMenu.avgRating}Star</h3>
        <h3>{RestaurantsMenu.costForTwoMessage}</h3>
      </div>
     
    </div>
  );

}

export default RestaurantsMenu;



