import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    id: "235820",
    name: "Biryani By Kilo",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/28/dc918561-39b9-4e12-8154-71e470a8051d_235820.jpg",
    locality: "MP Nagar",
    areaName: "Maharana Pratap Nagar",
    costForTwo: "₹499 for two",
    cuisines: [
      "Biryani",
      "Hyderabadi",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 4.4,
    parentId: "130",
    avgRatingString: "4.4",
    totalRatingsString: "8.2K+",
    promoted: true,
    adTrackingId:
      "cid=50276e03-5248-499a-9aa1-8a9844b5ecb7~p=3~adgrpid=50276e03-5248-499a-9aa1-8a9844b5ecb7#ag33~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=235820~plpr=COLLECTION~eid=96a5d449-a445-465d-9999-7441d4d61a71~srvts=1788113257221~collid=83639",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "40-50 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-08-31 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
          description: "Top-rated for Biryani, based on user votes.",
        },
        {
          imageId: "newg.png",
          description:
            "Premium gourmet restaurant offering an elevated, high-quality food experience.",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                theme: "",
                imageId:
                  "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                description: "Top-rated for Biryani, based on user votes.",
              },
            },
            {
              attributes: {
                description:
                  "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                theme: "",
                imageId: "newg.png",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹149",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.8",
        ratingCount: "297",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    campaignId: "50276e03-5248-499a-9aa1-8a9844b5ecb7",
    priceComparisonComms: {},
  },
  {
    id: "783279",
    name: "Veer Ji Malai Chaap Wale",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2026/4/14/b3a106e9-549b-41c8-9b71-93b67bdca593_c2aa7934-4297-4fc9-abcb-433f9344aeda.jpg",
    locality: "Indrapuri Raisen Road",
    areaName: "Piplani",
    costForTwo: "₹300 for two",
    cuisines: [
      "North Indian",
      "Tandoor",
      "Snacks",
      "Rolls & Wraps",
      "Burgers",
      "Biryani",
      "Chinese",
      "Beverages",
    ],
    avgRating: 4.1,
    veg: true,
    parentId: "12056",
    avgRatingString: "4.1",
    totalRatingsString: "550",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 6.8,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "6.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-08-30 23:45:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description:
            "Serves only 100% vegetarian food, with no non-veg items.",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description:
                  "Serves only 100% vegetarian food, with no non-veg items.",
                theme: "",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹119",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    priceComparisonComms: {},
  },
  {
    id: "508470",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/f8f2ee8f-10fd-4487-a353-14c2ebf53b1e_508470.JPG",
    locality: "Housing board Colony",
    areaName: "Kohefiza",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRating: 4.1,
    parentId: "547",
    avgRatingString: "4.1",
    totalRatingsString: "2.2K+",
    promoted: true,
    adTrackingId:
      "cid=83603308-0a4d-45bb-8a2e-c52d64234547~p=2~adgrpid=83603308-0a4d-45bb-8a2e-c52d64234547#ag45~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=508470~plpr=COLLECTION~eid=dbf925ea-85d1-4013-be2b-a82ce08bf721~srvts=1788113257221~collid=83639",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 4.6,
      serviceability: "SERVICEABLE",
      slaString: "30-40 mins",
      lastMileTravelString: "4.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-08-31 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
          description: "Top-rated for Burger, based on user votes.",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                theme: "",
                imageId:
                  "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                description: "Top-rated for Burger, based on user votes.",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      discountTag: "FLAT DEAL",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    campaignId: "83603308-0a4d-45bb-8a2e-c52d64234547",
    priceComparisonComms: {},
  },
  {
    id: "79805",
    name: "Behrouz Biryani",
    cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
    locality: "Chetak Bridge",
    areaName: "Maharana Pratap Nagar",
    costForTwo: "₹500 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.3,
    parentId: "1803",
    avgRatingString: "4.3",
    totalRatingsString: "7.9K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "35-45 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-08-31 03:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
          description: "Top-rated for Mughlai, based on user votes.",
        },
        {
          imageId: "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
          description: "Top-rated for Corporate, based on user votes.",
        },
        {
          imageId: "newg.png",
          description:
            "Premium gourmet restaurant offering an elevated, high-quality food experience.",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId:
                  "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
                description: "Top-rated for Mughlai, based on user votes.",
                theme: "",
              },
            },
            {
              attributes: {
                imageId:
                  "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                description: "Top-rated for Corporate, based on user votes.",
                theme: "",
              },
            },
            {
              attributes: {
                imageId: "newg.png",
                description:
                  "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                theme: "",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        maxDuration: "3000",
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    priceComparisonComms: {},
  },
  {
    id: "96842",
    name: "Vrindavan Dhaba",
    cloudinaryImageId: "qcz5k0v7r7drbslfoxbq",
    locality: "Hoshangabad Road",
    areaName: "Hoshangabad Road",
    costForTwo: "₹250 for two",
    cuisines: ["Indian", "Tandoor", "Snacks", "Beverages", "Chinese"],
    avgRating: 4.4,
    veg: true,
    parentId: "224566",
    avgRatingString: "4.4",
    totalRatingsString: "31K+",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 11.8,
      serviceability: "SERVICEABLE",
      slaString: "40-50 mins",
      lastMileTravelString: "11.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-08-31 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description:
            "Serves only 100% vegetarian food, with no non-veg items.",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description:
                  "Serves only 100% vegetarian food, with no non-veg items.",
                theme: "",
              },
            },
          ],
        },
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹19",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        maxDuration: "3000",
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.9",
        ratingCount: "11K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    priceComparisonComms: {},
  },
  {
    id: "801295",
    name: "Makhani Darbar: Curries, Breads & Beyond",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/476dddb5-9cb1-4266-aba1-385f1a60b57e_801295.JPG",
    locality: "MP Nagar",
    areaName: "Chetak Bridge",
    costForTwo: "₹500 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.1,
    parentId: "478595",
    avgRatingString: "4.1",
    totalRatingsString: "128",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-08-31 03:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
          description: "Top-rated for Newcomer, based on user votes.",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textExtendedBadges: {},
        textBased: {},
        imageBased: {
          badgeObject: [
            {
              attributes: {
                theme: "",
                imageId:
                  "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
                description: "Top-rated for Newcomer, based on user votes.",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹79",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        maxDuration: "3000",
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    priceComparisonComms: {},
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))} 
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
