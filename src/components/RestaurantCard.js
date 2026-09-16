const RestaurantCard = (props) => {
  const { resData } = props;

  const { info } = resData;

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

      {/* <h4>{areaName}</h4> */}
    </div>
  );
};

export default RestaurantCard;
