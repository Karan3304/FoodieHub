const restaurants = [
  {
    resId: "r101",
    resName: "Pizza Palace",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    cuisine: ["Italian", "Pizza"],
    rating: 4.4,
    deliveryTime: 30,
    costForTwo: 500,
    area: "Vijay Nagar",
    menu: [
      {
        categoryId: "cat101",
        categoryName: "Pizzas",
        items: [
          {
            itemId: "i101",
            itemName: "Margherita Pizza",
            description: "Classic pizza with tomato, mozzarella and basil.",
            price: 299,
            imageUrl:
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
            isVeg: true,
            rating: 4.5,
          },
          {
            itemId: "i102",
            itemName: "Farmhouse Pizza",
            description: "Loaded with onion, capsicum, tomato and mushrooms.",
            price: 399,
            imageUrl:
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i103",
            itemName: "Paneer Tikka Pizza",
            description: "Spicy paneer tikka with onion and capsicum.",
            price: 429,
            imageUrl:
              "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
            isVeg: true,
            rating: 4.6,
          },
        ],
      },
      {
        categoryId: "cat102",
        categoryName: "Burgers",
        items: [
          {
            itemId: "i104",
            itemName: "Cheese Burger",
            description: "Crispy patty with cheese, lettuce and special sauce.",
            price: 199,
            imageUrl:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: false,
            rating: 4.3,
          },
          {
            itemId: "i105",
            itemName: "Veg Supreme Burger",
            description: "Crispy veg patty with fresh vegetables and cheese.",
            price: 179,
            imageUrl:
              "https://images.unsplash.com/photo-1550547660-d9450f859349",
            isVeg: true,
            rating: 4.2,
          },
        ],
      },
    ],
  },

  {
    resId: "r102",
    resName: "Burger House",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    cuisine: ["American", "Burgers"],
    rating: 4.2,
    deliveryTime: 25,
    costForTwo: 400,
    area: "Palasia",
    menu: [
      {
        categoryId: "cat201",
        categoryName: "Burgers",
        items: [
          {
            itemId: "i201",
            itemName: "Classic Chicken Burger",
            description: "Juicy chicken patty with lettuce and house sauce.",
            price: 249,
            imageUrl:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: false,
            rating: 4.4,
          },
          {
            itemId: "i202",
            itemName: "Crispy Chicken Burger",
            description: "Crispy fried chicken with cheese and spicy mayo.",
            price: 299,
            imageUrl:
              "https://images.unsplash.com/photo-1550317138-10000687a72b",
            isVeg: false,
            rating: 4.5,
          },
          {
            itemId: "i203",
            itemName: "Veg Cheese Burger",
            description:
              "Crispy vegetable patty with cheese and fresh lettuce.",
            price: 179,
            imageUrl:
              "https://images.unsplash.com/photo-1550547660-d9450f859349",
            isVeg: true,
            rating: 4.1,
          },
        ],
      },
      {
        categoryId: "cat202",
        categoryName: "Sides",
        items: [
          {
            itemId: "i204",
            itemName: "French Fries",
            description: "Golden crispy fries seasoned with herbs.",
            price: 129,
            imageUrl:
              "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i205",
            itemName: "Cheese Fries",
            description: "Crispy fries topped with melted cheese.",
            price: 169,
            imageUrl:
              "https://images.unsplash.com/photo-1585109649139-366815a0d713",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
    ],
  },

  {
    resId: "r103",
    resName: "Spice Garden",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    cuisine: ["North Indian", "Indian"],
    rating: 4.5,
    deliveryTime: 35,
    costForTwo: 600,
    area: "Scheme 54",
    menu: [
      {
        categoryId: "cat301",
        categoryName: "Main Course",
        items: [
          {
            itemId: "i301",
            itemName: "Paneer Butter Masala",
            description: "Soft paneer cooked in rich tomato and butter gravy.",
            price: 299,
            imageUrl:
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
            isVeg: true,
            rating: 4.6,
          },
          {
            itemId: "i302",
            itemName: "Dal Tadka",
            description:
              "Yellow lentils tempered with garlic, cumin and spices.",
            price: 199,
            imageUrl:
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i303",
            itemName: "Butter Chicken",
            description: "Tender chicken cooked in creamy tomato gravy.",
            price: 349,
            imageUrl:
              "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
            isVeg: false,
            rating: 4.7,
          },
        ],
      },
      {
        categoryId: "cat302",
        categoryName: "Breads",
        items: [
          {
            itemId: "i304",
            itemName: "Butter Naan",
            description: "Soft naan brushed with butter.",
            price: 59,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i305",
            itemName: "Garlic Naan",
            description: "Soft naan topped with garlic and coriander.",
            price: 79,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.5,
          },
        ],
      },
    ],
  },

  {
    resId: "r104",
    resName: "South Indian Hub",
    imageUrl: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    cuisine: ["South Indian"],
    rating: 4.3,
    deliveryTime: 28,
    costForTwo: 350,
    area: "Bhawarkua",
    menu: [
      {
        categoryId: "cat401",
        categoryName: "Dosa",
        items: [
          {
            itemId: "i401",
            itemName: "Masala Dosa",
            description: "Crispy dosa filled with spiced potato masala.",
            price: 149,
            imageUrl:
              "https://images.unsplash.com/photo-1630383249896-424e482df921",
            isVeg: true,
            rating: 4.5,
          },
          {
            itemId: "i402",
            itemName: "Paneer Dosa",
            description: "Crispy dosa stuffed with spicy paneer filling.",
            price: 199,
            imageUrl:
              "https://images.unsplash.com/photo-1630383249896-424e482df921",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
      {
        categoryId: "cat402",
        categoryName: "Idli",
        items: [
          {
            itemId: "i403",
            itemName: "Idli Sambar",
            description: "Soft steamed idlis served with sambar and chutney.",
            price: 99,
            imageUrl:
              "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i404",
            itemName: "Medu Vada",
            description: "Crispy lentil fritters served with sambar.",
            price: 109,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
            isVeg: true,
            rating: 4.2,
          },
        ],
      },
    ],
  },

  {
    resId: "r105",
    resName: "Biryani Junction",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    cuisine: ["Biryani", "Indian"],
    rating: 4.6,
    deliveryTime: 32,
    costForTwo: 550,
    area: "Rau",
    menu: [
      {
        categoryId: "cat501",
        categoryName: "Biryani",
        items: [
          {
            itemId: "i501",
            itemName: "Chicken Biryani",
            description:
              "Fragrant basmati rice cooked with tender chicken and spices.",
            price: 299,
            imageUrl:
              "https://images.unsplash.com/photo-1563379091339-03246963d96c",
            isVeg: false,
            rating: 4.7,
          },
          {
            itemId: "i502",
            itemName: "Veg Biryani",
            description:
              "Aromatic basmati rice cooked with fresh vegetables and spices.",
            price: 229,
            imageUrl:
              "https://images.unsplash.com/photo-1563379091339-03246963d96c",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i503",
            itemName: "Paneer Biryani",
            description:
              "Spiced rice cooked with soft paneer and aromatic herbs.",
            price: 259,
            imageUrl:
              "https://images.unsplash.com/photo-1563379091339-03246963d96c",
            isVeg: true,
            rating: 4.5,
          },
        ],
      },
      {
        categoryId: "cat502",
        categoryName: "Kebabs",
        items: [
          {
            itemId: "i504",
            itemName: "Chicken Seekh Kebab",
            description:
              "Juicy minced chicken kebabs grilled with Indian spices.",
            price: 249,
            imageUrl:
              "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
            isVeg: false,
            rating: 4.5,
          },
          {
            itemId: "i505",
            itemName: "Paneer Tikka",
            description: "Grilled paneer cubes marinated with spices.",
            price: 229,
            imageUrl:
              "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
    ],
  },

  {
    resId: "r106",
    resName: "Wok Express",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    cuisine: ["Chinese", "Asian"],
    rating: 4.1,
    deliveryTime: 27,
    costForTwo: 450,
    area: "Geeta Bhawan",
    menu: [
      {
        categoryId: "cat601",
        categoryName: "Noodles",
        items: [
          {
            itemId: "i601",
            itemName: "Hakka Noodles",
            description: "Stir-fried noodles with vegetables and Asian sauces.",
            price: 189,
            imageUrl:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i602",
            itemName: "Chicken Noodles",
            description:
              "Stir-fried noodles with tender chicken and vegetables.",
            price: 229,
            imageUrl:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            isVeg: false,
            rating: 4.4,
          },
        ],
      },
      {
        categoryId: "cat602",
        categoryName: "Rice",
        items: [
          {
            itemId: "i603",
            itemName: "Veg Fried Rice",
            description:
              "Fried rice tossed with vegetables and Chinese sauces.",
            price: 179,
            imageUrl:
              "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
            isVeg: true,
            rating: 4.2,
          },
          {
            itemId: "i604",
            itemName: "Chicken Fried Rice",
            description:
              "Classic fried rice with chicken and fresh vegetables.",
            price: 229,
            imageUrl:
              "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
            isVeg: false,
            rating: 4.3,
          },
        ],
      },
    ],
  },

  {
    resId: "r107",
    resName: "Tandoori Flames",
    imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
    cuisine: ["Mughlai", "North Indian"],
    rating: 4.5,
    deliveryTime: 34,
    costForTwo: 650,
    area: "Old Palasia",
    menu: [
      {
        categoryId: "cat701",
        categoryName: "Tandoori",
        items: [
          {
            itemId: "i701",
            itemName: "Tandoori Chicken",
            description:
              "Chicken marinated in spices and roasted in a clay oven.",
            price: 349,
            imageUrl:
              "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
            isVeg: false,
            rating: 4.7,
          },
          {
            itemId: "i702",
            itemName: "Chicken Tikka",
            description: "Tender chicken pieces grilled with aromatic spices.",
            price: 299,
            imageUrl:
              "https://images.unsplash.com/photo-1532634922-8fe0b757fb13",
            isVeg: false,
            rating: 4.5,
          },
        ],
      },
      {
        categoryId: "cat702",
        categoryName: "Starters",
        items: [
          {
            itemId: "i703",
            itemName: "Paneer Tikka",
            description: "Marinated paneer grilled with onion and capsicum.",
            price: 249,
            imageUrl:
              "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i704",
            itemName: "Chicken Malai Tikka",
            description: "Creamy chicken tikka with mild aromatic spices.",
            price: 329,
            imageUrl:
              "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
            isVeg: false,
            rating: 4.6,
          },
        ],
      },
    ],
  },

  {
    resId: "r108",
    resName: "Dosa Corner",
    imageUrl: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    cuisine: ["South Indian", "Breakfast"],
    rating: 4.4,
    deliveryTime: 22,
    costForTwo: 300,
    area: "Vijay Nagar",
    menu: [
      {
        categoryId: "cat801",
        categoryName: "Dosa",
        items: [
          {
            itemId: "i801",
            itemName: "Plain Dosa",
            description: "Thin and crispy traditional South Indian dosa.",
            price: 99,
            imageUrl:
              "https://images.unsplash.com/photo-1630383249896-424e482df921",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i802",
            itemName: "Masala Dosa",
            description: "Crispy dosa filled with flavorful potato masala.",
            price: 139,
            imageUrl:
              "https://images.unsplash.com/photo-1630383249896-424e482df921",
            isVeg: true,
            rating: 4.6,
          },
          {
            itemId: "i803",
            itemName: "Cheese Dosa",
            description:
              "Crispy dosa filled with melted cheese and vegetables.",
            price: 179,
            imageUrl:
              "https://images.unsplash.com/photo-1630383249896-424e482df921",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
      {
        categoryId: "cat802",
        categoryName: "Breakfast",
        items: [
          {
            itemId: "i804",
            itemName: "Idli Sambar",
            description: "Soft idlis served with hot sambar and chutney.",
            price: 89,
            imageUrl:
              "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i805",
            itemName: "Medu Vada",
            description: "Crispy South Indian lentil fritters.",
            price: 99,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
            isVeg: true,
            rating: 4.2,
          },
        ],
      },
    ],
  },

  {
    resId: "r109",
    resName: "The Pasta Bowl",
    imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    cuisine: ["Italian", "Pasta"],
    rating: 4.3,
    deliveryTime: 29,
    costForTwo: 550,
    area: "Bengali Square",
    menu: [
      {
        categoryId: "cat901",
        categoryName: "Pasta",
        items: [
          {
            itemId: "i901",
            itemName: "White Sauce Pasta",
            description: "Creamy pasta cooked with herbs and vegetables.",
            price: 249,
            imageUrl:
              "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i902",
            itemName: "Red Sauce Pasta",
            description: "Pasta tossed in spicy tomato and herb sauce.",
            price: 229,
            imageUrl:
              "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i903",
            itemName: "Chicken Alfredo Pasta",
            description: "Creamy Alfredo pasta with grilled chicken.",
            price: 329,
            imageUrl:
              "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
            isVeg: false,
            rating: 4.6,
          },
        ],
      },
      {
        categoryId: "cat902",
        categoryName: "Garlic Bread",
        items: [
          {
            itemId: "i904",
            itemName: "Classic Garlic Bread",
            description: "Toasted bread with garlic butter and herbs.",
            price: 129,
            imageUrl:
              "https://images.unsplash.com/photo-1573140401552-3fab0b24306f",
            isVeg: true,
            rating: 4.2,
          },
          {
            itemId: "i905",
            itemName: "Cheese Garlic Bread",
            description: "Garlic bread topped with melted mozzarella cheese.",
            price: 169,
            imageUrl:
              "https://images.unsplash.com/photo-1573140401552-3fab0b24306f",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
    ],
  },

  {
    resId: "r110",
    resName: "Momos Nation",
    imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c",
    cuisine: ["Tibetan", "Chinese"],
    rating: 4.2,
    deliveryTime: 24,
    costForTwo: 350,
    area: "Bhawarkua",
    menu: [
      {
        categoryId: "cat1001",
        categoryName: "Momos",
        items: [
          {
            itemId: "i1001",
            itemName: "Veg Momos",
            description: "Steamed dumplings filled with fresh vegetables.",
            price: 129,
            imageUrl:
              "https://images.unsplash.com/photo-1496116218417-1a781b1c416c",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i1002",
            itemName: "Chicken Momos",
            description: "Steamed dumplings filled with seasoned chicken.",
            price: 159,
            imageUrl:
              "https://images.unsplash.com/photo-1496116218417-1a781b1c416c",
            isVeg: false,
            rating: 4.4,
          },
          {
            itemId: "i1003",
            itemName: "Fried Momos",
            description: "Crispy fried dumplings served with spicy chutney.",
            price: 169,
            imageUrl:
              "https://images.unsplash.com/photo-1496116218417-1a781b1c416c",
            isVeg: true,
            rating: 4.2,
          },
        ],
      },
      {
        categoryId: "cat1002",
        categoryName: "Soups",
        items: [
          {
            itemId: "i1004",
            itemName: "Hot and Sour Soup",
            description: "Spicy and tangy soup with vegetables.",
            price: 119,
            imageUrl:
              "https://images.unsplash.com/photo-1547592180-85f173990554",
            isVeg: true,
            rating: 4.1,
          },
          {
            itemId: "i1005",
            itemName: "Manchow Soup",
            description: "Spicy Chinese soup topped with crispy noodles.",
            price: 129,
            imageUrl:
              "https://images.unsplash.com/photo-1547592180-85f173990554",
            isVeg: true,
            rating: 4.3,
          },
        ],
      },
    ],
  },

  {
    resId: "r111",
    resName: "Chaat Street",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    cuisine: ["Street Food", "Indian"],
    rating: 4.4,
    deliveryTime: 20,
    costForTwo: 300,
    area: "Rajwada",
    menu: [
      {
        categoryId: "cat1101",
        categoryName: "Chaat",
        items: [
          {
            itemId: "i1101",
            itemName: "Pani Puri",
            description:
              "Crispy puris filled with spicy and tangy flavored water.",
            price: 79,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.5,
          },
          {
            itemId: "i1102",
            itemName: "Aloo Tikki Chaat",
            description:
              "Crispy potato patties topped with chutneys and spices.",
            price: 99,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i1103",
            itemName: "Dahi Puri",
            description:
              "Crispy puris topped with yogurt, chutneys and spices.",
            price: 109,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.5,
          },
        ],
      },
      {
        categoryId: "cat1102",
        categoryName: "Snacks",
        items: [
          {
            itemId: "i1104",
            itemName: "Samosa",
            description: "Crispy pastry filled with spicy potato and peas.",
            price: 49,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i1105",
            itemName: "Kachori",
            description: "Crispy Indian snack filled with spiced lentils.",
            price: 59,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.2,
          },
        ],
      },
    ],
  },

  {
    resId: "r112",
    resName: "Healthy Bites",
    imageUrl: "https://images.unsplash.com/photo-1543362906-acfc16c67564",
    cuisine: ["Healthy", "Salads"],
    rating: 4.5,
    deliveryTime: 26,
    costForTwo: 500,
    area: "Scheme 140",
    menu: [
      {
        categoryId: "cat1201",
        categoryName: "Salads",
        items: [
          {
            itemId: "i1201",
            itemName: "Greek Salad",
            description: "Fresh vegetables with feta cheese and herbs.",
            price: 229,
            imageUrl:
              "https://images.unsplash.com/photo-1540420773420-3366772f4999",
            isVeg: true,
            rating: 4.5,
          },
          {
            itemId: "i1202",
            itemName: "Paneer Salad",
            description: "Fresh vegetables topped with grilled paneer.",
            price: 249,
            imageUrl:
              "https://images.unsplash.com/photo-1543362906-acfc16c67564",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
      {
        categoryId: "cat1202",
        categoryName: "Bowls",
        items: [
          {
            itemId: "i1203",
            itemName: "Veg Power Bowl",
            description: "Healthy bowl with rice, vegetables and beans.",
            price: 279,
            imageUrl:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
            isVeg: true,
            rating: 4.6,
          },
          {
            itemId: "i1204",
            itemName: "Chicken Protein Bowl",
            description:
              "Protein-rich bowl with grilled chicken and vegetables.",
            price: 329,
            imageUrl:
              "https://images.unsplash.com/photo-1547592180-85f173990554",
            isVeg: false,
            rating: 4.5,
          },
        ],
      },
    ],
  },

  {
    resId: "r113",
    resName: "Sweet Treats",
    imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    cuisine: ["Desserts", "Bakery"],
    rating: 4.6,
    deliveryTime: 23,
    costForTwo: 400,
    area: "Saket",
    menu: [
      {
        categoryId: "cat1301",
        categoryName: "Desserts",
        items: [
          {
            itemId: "i1301",
            itemName: "Chocolate Cake",
            description:
              "Rich and moist chocolate cake with chocolate frosting.",
            price: 199,
            imageUrl:
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            isVeg: true,
            rating: 4.7,
          },
          {
            itemId: "i1302",
            itemName: "Cheesecake",
            description: "Creamy cheesecake with a buttery biscuit base.",
            price: 229,
            imageUrl:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
            isVeg: true,
            rating: 4.6,
          },
          {
            itemId: "i1303",
            itemName: "Chocolate Brownie",
            description: "Warm chocolate brownie with a rich fudgy center.",
            price: 149,
            imageUrl:
              "https://images.unsplash.com/photo-1569864358642-9d1684040f43",
            isVeg: true,
            rating: 4.5,
          },
        ],
      },
      {
        categoryId: "cat1302",
        categoryName: "Ice Cream",
        items: [
          {
            itemId: "i1304",
            itemName: "Chocolate Ice Cream",
            description: "Creamy chocolate ice cream with rich cocoa flavor.",
            price: 99,
            imageUrl:
              "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i1305",
            itemName: "Vanilla Ice Cream",
            description: "Classic smooth and creamy vanilla ice cream.",
            price: 89,
            imageUrl:
              "https://images.unsplash.com/photo-1570197788417-0e82375c9371",
            isVeg: true,
            rating: 4.3,
          },
        ],
      },
    ],
  },

  {
    resId: "r114",
    resName: "Cafe Coffee Corner",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    cuisine: ["Cafe", "Coffee"],
    rating: 4.2,
    deliveryTime: 21,
    costForTwo: 450,
    area: "Vijay Nagar",
    menu: [
      {
        categoryId: "cat1401",
        categoryName: "Coffee",
        items: [
          {
            itemId: "i1401",
            itemName: "Cappuccino",
            description: "Espresso topped with steamed milk and creamy foam.",
            price: 149,
            imageUrl:
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            isVeg: true,
            rating: 4.4,
          },
          {
            itemId: "i1402",
            itemName: "Cold Coffee",
            description: "Chilled creamy coffee blended with ice.",
            price: 169,
            imageUrl:
              "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
            isVeg: true,
            rating: 4.5,
          },
        ],
      },
      {
        categoryId: "cat1402",
        categoryName: "Snacks",
        items: [
          {
            itemId: "i1403",
            itemName: "Veg Sandwich",
            description:
              "Grilled sandwich filled with fresh vegetables and cheese.",
            price: 159,
            imageUrl:
              "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
            isVeg: true,
            rating: 4.2,
          },
          {
            itemId: "i1404",
            itemName: "Chocolate Muffin",
            description: "Soft chocolate muffin loaded with chocolate chips.",
            price: 119,
            imageUrl:
              "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
    ],
  },

  {
    resId: "r115",
    resName: "Royal Thali",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    cuisine: ["Indian", "Rajasthani"],
    rating: 4.7,
    deliveryTime: 38,
    costForTwo: 700,
    area: "MG Road",
    menu: [
      {
        categoryId: "cat1501",
        categoryName: "Thali",
        items: [
          {
            itemId: "i1501",
            itemName: "Special Veg Thali",
            description:
              "Complete Indian thali with dal, paneer, vegetables, roti and rice.",
            price: 299,
            imageUrl:
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
            isVeg: true,
            rating: 4.7,
          },
          {
            itemId: "i1502",
            itemName: "Rajasthani Thali",
            description:
              "Traditional Rajasthani thali with dal baati, vegetables and sweets.",
            price: 349,
            imageUrl:
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
            isVeg: true,
            rating: 4.8,
          },
          {
            itemId: "i1503",
            itemName: "Paneer Thali",
            description:
              "Complete vegetarian meal with paneer curry, dal, roti and rice.",
            price: 329,
            imageUrl:
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
            isVeg: true,
            rating: 4.6,
          },
        ],
      },
      {
        categoryId: "cat1502",
        categoryName: "Breads",
        items: [
          {
            itemId: "i1504",
            itemName: "Tandoori Roti",
            description: "Traditional whole wheat roti cooked in a tandoor.",
            price: 35,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.3,
          },
          {
            itemId: "i1505",
            itemName: "Butter Roti",
            description: "Soft whole wheat roti brushed with butter.",
            price: 45,
            imageUrl:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            isVeg: true,
            rating: 4.4,
          },
        ],
      },
    ],
  },
];

export default restaurants;
