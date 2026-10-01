
<div align="center">

# 🍽️ FoodieHub

### A food ordering web app built with React: browse restaurants, explore menus, and fill your cart.

<p>
  <a href="https://foodiehub-k3304-x7p9.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo on Vercel" />
  </a>

  <a href="https://karan3304.github.io/FoodieHub/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-GitHub%20Pages-222?style=for-the-badge&logo=github" alt="Live Demo on GitHub Pages" />
  </a>
</p>

<p>
  <img src="https://skillicons.dev/icons?i=react,redux,tailwind,js,html,css,jest,git,github&theme=light" alt="Tech stack icons" />
</p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Parcel-2-21374B?style=for-the-badge&logo=parcel&logoColor=white" alt="Parcel" />
  <img src="https://img.shields.io/badge/Jest-30-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
</p>

</div>


---

## 📖 About the project

**FoodieHub** is a single-page food ordering app in the style of Swiggy/Zomato. A user lands on a grid of restaurants, searches or filters them, opens a restaurant to see its menu grouped by category, adds dishes to a cart, and adjusts quantities on a dedicated cart page.

The project is also a hands-on showcase of core **React patterns**, each used for a real purpose in the app:

| Pattern | Where it's used |
| --- | --- |
| **Higher-Order Component** | `withVegLabel(RestaurantCard)` adds a 🟢 VEG badge to vegetarian restaurants |
| **Custom hooks** | `useRestaurantMenu` (menu fetching) and `useOnlineStatus` (offline detection) |
| **Redux Toolkit** | A `cartSlice` holds cart items and quantities, shared by Header and Cart page |
| **Context API** | `UserContext` shares the logged-in user name across components |
| **Lazy loading + Suspense** | `About` and `Grocery` pages load only when visited |
| **Conditional rendering** | Shimmer placeholders, offline message, error pages |
| **Lifting state up** | `RestaurantMenu` controls which menu category is open |
| **Testing** | Jest + React Testing Library tests with mocked API data |

---

## ✨ Features

- 🏠 **Restaurant listing:** live data fetched from an API and shown as cards (image, cuisines, rating, delivery time, cost for two)
- 🔍 **Search:** filter restaurants by name
- ⭐ **Top rated filter:** show only restaurants rated above 4.2
- 🟢 **Veg label:** vegetarian restaurants automatically get a VEG badge via a higher-order component
- 📋 **Restaurant menu:** dishes grouped into collapsible categories (accordion, one open at a time)
- 🛒 **Cart:** add dishes, increase or decrease quantity, clear the cart, and see the live item count in the header
- 📶 **Online status indicator:** green or red in the header, plus an offline message in the app
- ⏳ **Shimmer loading UI:** skeleton screens while data loads (`Shimmer`, `MenuShimmer`)
- ⚠️ **Error handling:** dedicated pages for bad routes (`Error`) and failed menu requests (`MenuError`)
- ⚡ **Code splitting:** lazy-loaded About and Grocery pages
- 🧪 **Tested:** component tests for Header, Search, Restaurant card, Contact and Cart flows

---

## 🧩 How it works

### Component architecture

```mermaid
flowchart TD
    A["AppLayout<br/>(Redux Provider + UserContext)"] --> H[Header]
    A --> O[Outlet]
    H --> L[Logo]
    H --> N["Navbar: Home, About us, Contact us, Grocery, Cart"]
    O --> B[Body]
    O --> AB["About (lazy)"]
    O --> C[Contact]
    O --> G["Grocery (lazy)"]
    O --> CT[Cart]
    O --> RM[RestaurantMenu]
    B --> RC[RestaurantCard]
    B --> RV["withVegLabel(RestaurantCard)"]
    RM --> RCat[RestaurantCategory]
    RCat --> IL[ItemList]
```

### Restaurant listing flow (Body)

```mermaid
flowchart TD
    B[Body] --> E["useEffect → fetchData()"]
    E --> S["useState: full list + filtered list"]
    S -->|list empty| SH[Shimmer]
    S --> F["Search / Top rated → filter()"]
    F --> M["filteredRestaurants.map()"]
    M --> V{"restaurant.info.veg?"}
    V -->|yes| HOC["withVegLabel(RestaurantCard)<br/>card + 🟢 VEG label"]
    V -->|no| RC[RestaurantCard]
    HOC --> LK["Link → /restaurants/:resId"]
    RC --> LK
```

### Menu and cart flow (Redux)

```mermaid
flowchart TD
    RM[RestaurantMenu] --> HK["useRestaurantMenu (custom hook)"]
    HK -->|loading / error| MS["MenuShimmer / MenuError"]
    HK --> RCat["RestaurantCategory (accordion)"]
    RCat --> IL["ItemList → Add +"]
    IL -->|"dispatch(addItems)"| ST[("Redux store: cartSlice")]
    ST --> HD["Header: cart item count"]
    ST <-->|"increment / decrement / clear"| CP[Cart page]
```

---

## 🛠️ Tech stack

| Layer | Technology |
| --- | --- |
| UI library | React 19 |
| Routing | React Router DOM 6 (`createBrowserRouter`, nested routes, `Outlet`) |
| State management | Redux Toolkit + React Redux, plus Context API |
| Styling | Tailwind CSS 4 (via PostCSS) |
| Bundler | Parcel 2 |
| Testing | Jest 30, React Testing Library, jest-environment-jsdom |
| Data | REST API (restaurant list and menu endpoints) |

---

## 📁 Project structure

```
FoodieHub/
├── index.html
├── index.css                  # Tailwind entry
├── package.json
├── babel.config.js
├── jest.config.js
└── src/
    ├── App.js                 # Router, layout, providers
    ├── components/
    │   ├── Header.js          # Logo, nav links, online status, cart count
    │   ├── Body.js            # Restaurant list, search, filters
    │   ├── RestaurantCard.js  # Card + withVegLabel HOC
    │   ├── RestaurantMenu.js  # Menu page
    │   ├── RestaurantCategory.js  # Accordion section
    │   ├── ItemList.js        # Dishes + Add button
    │   ├── Cart.js            # Cart page
    │   ├── Shimmer.js / MenuShimmer.js
    │   ├── Error.js / MenuError.js
    │   ├── About.js / UserClass.js   # Class component demo
    │   ├── Contact.js
    │   ├── Grocery.js
    │   ├── mocks/             # JSON mock data for tests
    │   └── __tests__/         # Jest + RTL tests
    └── utils/
        ├── appStore.js        # Redux store
        ├── cartSlice.js       # Cart reducers
        ├── UserContext.js     # Context
        ├── useRestaurantMenu.js
        ├── useOnlineStatus.js
        └── constants.js       # API URLs and image CDN
```

---

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Karan3304/FoodieHub.git

# 2. Move into the project
cd FoodieHub

# 3. Install dependencies
npm install

# 4. Start the dev server
npm start
```

Parcel will print a local URL (usually `http://localhost:1234`). Open it in your browser.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm start` | Runs the app in development with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm test` | Runs all Jest tests (with coverage) |
| `npm run watch-test` | Runs tests in watch mode |

---

## 🧪 Testing

Tests live in `src/components/__tests__/` and use mocked `fetch` responses from `src/components/mocks/`.

```bash
npm test
```

They cover rendering the restaurant card, searching restaurants, header behavior, the contact page, and the full add-to-cart flow across the menu, header and cart page.

---

## 🌐 API note

The app reads restaurant and menu data from a hosted API (see `src/utils/constants.js` and `Body.js`). If the server is on a free hosting tier, the first request after a quiet period can take a few seconds. The shimmer screen is shown while it wakes up.

---

## 🗺️ Roadmap ideas

- [ ] Real authentication instead of the demo Login/Logout button
- [ ] Persist the cart (localStorage or a backend)
- [ ] Checkout and order summary page
- [ ] Veg-only and cuisine filters
- [ ] Replace the demo About and Grocery pages with real content
- [ ] Screenshots or a live demo link in this README

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome. Feel free to open an [issue](https://github.com/Karan3304/FoodieHub/issues) or submit a pull request.

---

## 👤 Author

**Karan**
GitHub: [@Karan3304](https://github.com/Karan3304)

---

<div align="center">

If you like this project, give it a ⭐ on GitHub!

</div>
