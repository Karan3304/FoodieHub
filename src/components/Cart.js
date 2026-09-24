import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { incrementItem, decrementItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    return <h1 className="text-center m-10 text-2xl">Cart is empty</h1>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center m-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <ul>
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
          >
            <div className="w-8/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {(item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100) * item.quantity}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-4/12 flex flex-col items-center">
              <div className="relative w-28 h-28">
                {item.card.info.imageId && (
                  <img
                    className="w-28 h-28 rounded-lg shadow-md shadow-gray-400 object-cover"
                    src={CDN_URL + item.card.info.imageId}
                  />
                )}

                {/* Counter pill sitting on the image */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center bg-white shadow-lg rounded-full border border-gray-200 overflow-hidden">
                  <button
                    className="px-3 py-1 text-red-500 font-bold cursor-pointer"
                    onClick={() => dispatch(decrementItem(item))}
                  >
                    -
                  </button>
                  <span className="px-2 font-semibold text-sm">
                    {item.quantity}
                  </span>
                  <button
                    className="px-3 py-1 text-green-600 font-bold cursor-pointer"
                    onClick={() => dispatch(incrementItem(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
