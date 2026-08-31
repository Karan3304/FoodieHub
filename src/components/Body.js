import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let listofRestaurants = [
    {
      id: "235820",
      name: "Biryani By Kilo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/28/dc918561-39b9-4e12-8154-71e470a8051d_235820.jpg",
      costForTwo: "₹499 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.4,
      deliveryTime: 42,
    },
    {
      id: "508470",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/f8f2ee8f-10fd-4487-a353-14c2ebf53b1e_508470.JPG",
      costForTwo: "₹789 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.4,
      deliveryTime: 42,
    },
    {
      id: "79805",
      name: "Behrouz Biryani",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      costForTwo: "₹439 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.6,
      deliveryTime: 42,
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listofRestaurants = listofRestaurants.filter(
              (res) => res.avgRating > 4,
            );
            console.log(listofRestaurants);
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
