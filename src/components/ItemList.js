import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="relative w-32 h-32 ml-auto flex items-center justify-center">
                <button
                  className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white shadow-lg rounded-lg text-green-600 font-bold border border-gray-200 z-10 cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
                {item.card.info.imageId && (
                  <img
                    className="w-32 h-32 rounded-lg shadow-md shadow-gray-400 object-cover"
                    src={CDN_URL + item.card.info.imageId}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
