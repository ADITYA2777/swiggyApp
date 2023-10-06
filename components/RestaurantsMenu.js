import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { IMG_URL } from "../helper/Restraunts-List";
import ShimmerUi from "./ShimmerUI";
import useRestaurants from "../helper/UseRestaurants";
import { addItems } from "../helper/CerateSlice";
import { useDispatch } from "react-redux";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const RestaurantsMenu = useRestaurants(resId);

  const dispatch = useDispatch();

  const handlerItems = () => {
    dispatch(addItems("Graphes"));
    
  };

  const foodhanler=(items) => {
    dispatch(addItems(items))
  }

  return !RestaurantsMenu ? (
    <ShimmerUi />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant :Id {resId}</h1>
        <h2>{RestaurantsMenu.name}</h2>
        <img src={IMG_URL + RestaurantsMenu.cloudinaryImageId} />
        <h3>{RestaurantsMenu.area}</h3>
        <h3>{RestaurantsMenu.city}</h3>
        <h3>{RestaurantsMenu.avgRating}Star</h3>
        <h3>{RestaurantsMenu.costForTwoMessage}</h3>
      </div>
      <div>
        <button
          className="p-2 m-2 text-green-500"
          onClick={() => handlerItems()}
        >
          Add Items
        </button>
      </div>
     
    </div>
  );
};

export default RestaurantsMenu;
