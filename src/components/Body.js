import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // local state variable
  const [listofRestaurants, setlistofReataurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/mapi/restaurants/list/v5?lat=22.7527421&lng=75.88371599999999&collection=80448&tags=&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1",
    );

    const json = await data.json();
    console.log(json);
    // 1. Grab the raw cards array (guard against undefined with optional chaining)
    const cards = json?.data?.cards ?? [];
    console.log(cards);

    // // 2. Keep only entries that are actually restaurant cards
    const restaurantCards = cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    );
    console.log(restaurantCards);

    // // 3. Extract + flatten just the fields RestaurantCard needs
    const restaurants = restaurantCards
      .map((c) => c?.card?.card?.info)
      .filter(Boolean) // drop any nulls/undefined that slipped through
      .map((info) => ({
        id: info.id,
        name: info.name,
        cloudinaryImageId: info.cloudinaryImageId,
        cuisines: info.cuisines ?? [],
        avgRating: info.avgRating,
        costForTwo: info.costForTwo,
        deliveryTime: info.sla?.deliveryTime,
      }));
    console.log(restaurants);

    setlistofReataurants(restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.avgRating > 4,
            );
            setlistofReataurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
