import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import MenuError from "./MenuError";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);
  const { resinfo, error } = useRestaurantMenu(resId); // custom hook
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

  const categories =
    resinfo.cards
      ?.find((c) => c.card?.card?.cardGroupMap || c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (item) =>
          item.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      ) ?? [];

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ") || "No cuisines available"} - {costForTwoMessage}
      </p>
      {/* categories */}

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.categoryId}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex((prevIndex) => (prevIndex === index ? null : index));
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
