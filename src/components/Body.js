import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://foodfire.onrender.com/api/restaurants",
    );

    const json = await response.json();

    console.log(json);

    // const filtRES = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle // this is optional chaining
    // ?.restaurants || [];
    const filtRES =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle // this is optional chaining
        ?.restaurants || [];

    setListOfRestaurants(filtRES);
    setFilteredRestaurants(filtRES);
  };

  return listOfRestaurants.length === 0 ? ( // if(listofRest.length===0){ then return shimmer}  this is known as  conditional rendering
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            id="restaurant-search"
            name="restaurant-search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRestaurants(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2,
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// Restaurant API:
// https://foodfire.onrender.com/api/restaurants
// OR
// https://swiggy-api-4c740.web.app/swiggy-api.json

// Menu API:
// https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${resId}
// OR
// https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=
