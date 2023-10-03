
import { useState,useEffect } from "react";
import { SWIGGY_MENU_API } from "../helper/Restraunts-List";

 
const useRestaurants = (resId) => {
     const [RestaurantsMenu, setRestaurantsMenu] = useState(null);

     useEffect(() => {
       getRestaurantsInfo();
     }, []);
     async function getRestaurantsInfo() {
       const data = await fetch(SWIGGY_MENU_API + resId);
       const json = await data.json();
       console.log(json.data);
         setRestaurantsMenu(json?.data?.cards[0]?.card?.card?.info);
         
    }

    //      return RestaurantMenu data
    
         return RestaurantsMenu;
    
};

export default useRestaurants