import React from "react";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
