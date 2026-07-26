import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="p-2 m-2 text-white bg-black rounded-lg"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty !</h1>}
      <div className="flex">
        {cartItems.map((item) => (
          <RestaurantCard restoData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
