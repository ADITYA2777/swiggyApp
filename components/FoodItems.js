import React from "react";
import { SWIGGY_MENU_API } from "../helper/Restraunts-List";
const FoodItems = ({
  name,
  cloudinaryImageId,
  price,
  avgRating,
  description,
}) => {
  return (
    <div className="card">
      <img src={SWIGGY_MENU_API + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>Rupess:{price / 100}</h3>
      <h4>{avgRating}</h4>
      <h3 className="font-bold text-purple-800">{description}</h3>
    </div>
  );
};

export default FoodItems;
