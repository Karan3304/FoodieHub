import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import MenuError from "./MenuError";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);
  const [error, setError] = useState(false);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    if (!data.ok) {
      setError(true);
      return;
    }
    const json = await data.json();
    setResInfo(json.data);
  };
  if (error) return <MenuError />;

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards = resinfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards,
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems =
    regularCards?.flatMap(
      (category) => category?.card?.card?.itemCards || [],
    ) || [];

  const uniqueMenuItems = Array.from(
    new Map(menuItems.map((item) => [item?.card?.info?.id, item])).values(),
  );

  console.log(menuItems);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ") || "No cuisines available"}</h2>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {uniqueMenuItems.map((item) => {
          const info = item?.card?.info;

          const price = info?.price ?? info?.finalPrice ?? info?.defaultPrice;

          return (
            <li key={info.id}>
              {info.name} - ₹{price ? price / 100 : "N/A"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
