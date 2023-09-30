import React, { useState } from 'react'
import RestrauntantCard from './RestrauntantCard'
import { ResturantList } from '../helper/Restraunts-List';


 function filterData(SearchText,restaruant) {
   const filterData = restaruant.filter((restaurant) => {
     restaurant.info.name.includes(SearchText)
   });
   console.log(restaruant);
  
   return filterData;
}
const Body = () => {
    const [restaurants, setRestaruants] = useState(ResturantList);  
    const [SearchText ,setSearchText]= useState("")  
  return (
    <>
      <div className="Search-container">
        <input
          type="text"
          className="input-search"
          placeholder="Search"
          value={SearchText}
          onChange={(e) => console.log(setSearchText(e.target.value))}
        />
        <button className="search_btn" onClick={() => {
          const data = filterData(SearchText, restaurants)
          setRestaruants(data);
        }}>
          Search
        </button>
      </div>
      <div className="restaruants-list">
        {restaurants.map((restaurent) => {
          return (
            <RestrauntantCard {...restaurent.info} key={restaurent.info.id} />
          );
        })}
      </div>
    </>
  );
}

export default Body