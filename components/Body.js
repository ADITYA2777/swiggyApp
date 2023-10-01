// import React, { useState , useEffect } from 'react'
// import RestrauntantCard from './RestrauntantCard'
// import { ResturantList } from '../helper/Restraunts-List';
// import ShimmerUi from './ShimmerUI';


//  function filterData(SearchText,restaruant) {
//    const filterData = restaruant.filter((restaurant) =>
//      restaurant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
//    );
//    console.log(restaruant);
  
//    return filterData;
// }


// const Body = () => {
//   const  [allRestaurants,setAllRestaurants] = useState([])
//     const [filterRestaurants, setfilterRestaruants] = useState([]);
//     const [SearchText ,setSearchText]= useState("")

// useEffect(() => {
//   getResturants();
// }, []);

// async function getResturants() {
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1708138&lng=79.93047419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );
//   const json = await data.json();
//   console.log(json);
//    setAllRestaurants(
//      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//    );
//   setfilterRestaruants(
//     json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
 
//   }
   
//   if (!allRestaurants)return null
    
//   return allRestaurants?.length === 0 ? (
//     <ShimmerUi />
//   ) : (
//     <>
//       <div className="Search-container">
//         <input
//           type="text"
//           className="input-search"
//           placeholder="Search"
//           value={SearchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button
//           className="search_btn"
//           onClick={() => {
//             const data = filterData(SearchText, allRestaurants);
//            setfilterRestaruants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>

//       <div className="restaruants-list">
//         {filterRestaurants.map((restaurent) => {
//           return (
//             <RestrauntantCard {...restaurent.info} key={restaurent.info.id} />
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default Body




import React, { useEffect, useState } from "react";
import RestrauntantCard from "./RestrauntantCard";
import { ResturantList } from "../helper/Restraunts-List";
import ShimmerUi from "./ShimmerUI";

function filterData(SearchText, restaruant) {
  const filterData = restaruant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
  );
  console.log(filterData);
  return filterData;
}

const Body = () => {
  const [Restaurants, setRestaruants] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [originalRestaurants, setOriginalRestaurants] = useState([]); // Store the original list
  const [searched, setSearched] = useState(false); // Track if a search has been performed

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1708138&lng=79.93047419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaruants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!originalRestaurants) return null;

  // const handleSearch = () => {
  //   const data = filterData(SearchText, originalRestaurants); // Use the original list for filtering
  //   setRestaruants(data);
  //   setSearched(true); // Mark that a search has been performed
  // };

  // const handleReset = () => {
  //   setRestaruants(originalRestaurants);
  //   setSearchText("");
  //   setSearched(false); // Reset the search flag
  // };


  return originalRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="Search-container">
        <input
          type="text"
          className="input-search"
          placeholder="Search"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search_btn"
          onClick={() => {
            const data = filterData(SearchText, originalRestaurants); // Use the original list for filtering
            setRestaruants(data);
          }}
        >
          Search
        </button>
        <button
          className="reset_btn"
          onClick={() => setRestaruants(originalRestaurants)}
        >
          Reset
        </button>
      </div>
      <div className="restaruants-list">
        {searched && Restaurants.length === 0 ? (
          <div>
            <ShimmerUi />
          </div>
        ) : (
          Restaurants.length === 0 && <h1>No restaurants found!</h1>
        )}
        {Restaurants.map((restaurant) => {
          return (
            <RestrauntantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;









