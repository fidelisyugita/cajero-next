import React from "react";
import { useCart } from "../context/CartContext";

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    price: 4.5,
    description: "Espresso with steamed milk foam.",
  },
  {
    id: 2,
    name: "Latte",
    price: 5.0,
    description: "Espresso with steamed milk.",
  },
  {
    id: 3,
    name: "Espresso",
    price: 3.0,
    description: "Rich and full-bodied espresso shot.",
  },
  {
    id: 4,
    name: "Mocha",
    price: 5.5,
    description: "Espresso with chocolate and steamed milk.",
  },
];

const Menu: React.FC = () => {
  const { dispatch } = useCart();

  const addToCart = (item: { id: number; name: string; price: number }) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity: 1 } });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white rounded shadow transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="mt-2 text-lg font-bold">${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
