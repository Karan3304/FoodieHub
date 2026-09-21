import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { info } = resData;
  const {LoggedinUser} = useContext(UserContext)

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    areaName,
  } = info;

  return (
    <div className="m-4 p-4 w-60 rounded-lg hover:bg-gray-200 bg-gray-100">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt={name}
      />

      <h3 className="font-bold py-4 text-xl">{name}</h3>

      <h4>{cuisines.join(", ")}</h4>

      <h4>⭐ {avgRating}</h4>

      <h4>{sla?.slaString}</h4>

      <h4>{costForTwo}</h4>

      <h4>User :  {LoggedinUser}</h4>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-black bg-amber-200 m-2 p-2 rounded-lg font-bold">
          🟢 VEG
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
