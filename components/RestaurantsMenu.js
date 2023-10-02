
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SWIGGY_MENU_API } from '../helper/Restraunts-List';
import { IMG_URL } from '../helper/Restraunts-List';

const RestaurantsMenu = () => {
    const [RestaurantsMenu, setRestaurantsMenu] = useState({})

    const { resId } = useParams();

    useEffect(() => {
        getRestaurantsInfo()
    }, [])
    async function getRestaurantsInfo() {
        const data = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.534466&lng=73.874134&restaurantId=102140"
        );
        const json = await data.json();
        console.log(json.data);
        setRestaurantsMenu(json?.data?.cards[0]?.card?.card?.info)
    }

    
  return (
    <div>
      <div>
        <h2>{RestaurantsMenu.name}</h2>
        <img src={IMG_URL + RestaurantsMenu.cloudinaryImageId} />
        <h3>{RestaurantsMenu.area}</h3>
        <h3>{RestaurantsMenu.city}</h3>
        <h3>{RestaurantsMenu.avgRating}</h3>
        <h3>{RestaurantsMenu.costForTwoMessage}</h3>
          </div>
          <div>
         {/* {Object.values(RestaurantsMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)}  */}
          </div>
    </div>
  );
    
}

export default RestaurantsMenu