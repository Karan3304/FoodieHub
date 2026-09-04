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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt={name}
      />

      <h3>{name}</h3>

      <h4>{cuisines.join(", ")}</h4>

      <h4>⭐ {avgRating}</h4>

      <h4>{sla?.slaString}</h4>

      <h4>{costForTwo}</h4>

      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
