import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resinfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []); // fetch only once

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    if (!data.ok) {
      setError(true);
    }

    const json = await data.json();
    setResInfo(json.data);
  };
  return { resinfo, error };
};

export default useRestaurantMenu;
