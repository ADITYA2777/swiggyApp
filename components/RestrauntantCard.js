import React from "react";
import { IMG_URL } from "../helper/Restraunts-List";
import { useContext } from "react";
import UserContext from "../helper/UseContext";

const RestrauntantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  const{ user} = useContext(UserContext)
  return (
    <div className="card ">
      <img  className="w-56" src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(" ,")}</h3>
      <h4>{avgRating}</h4>
      {/* <h3 className="font-bold text-purple-800">{ user.email}</h3> */}
    </div>
  );
};

export default RestrauntantCard;
