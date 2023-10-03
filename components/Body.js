
import React, { useEffect, useState } from "react";
import RestrauntantCard from "./RestrauntantCard";
import { ResturantList } from "../helper/Restraunts-List";
import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../helper/FilterData";
import useOnline from "../helper/UseOniline";

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
    // console.log(json);
    setRestaruants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }


   const IsOnline = useOnline(true);
   if (!IsOnline) {
      return  <h1> Opps Please check your internet Connection!!</h1>;
   }

  if (!originalRestaurants) return null;

 

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
          Restaurants.length === 0 && (
            <div>
              <h1>No restaurants found!</h1>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png?f=webp" />
            </div>
          )
        )}
        {Restaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/Restaurant/" + restaurant.info.id}
            >
              <RestrauntantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;









