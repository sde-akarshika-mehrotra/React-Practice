import React from "react";
import { useEffect } from "react";
import restoMenu from "../utils/mockData2";
import { useParams } from "react-router-dom";

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch("");
//     const json = await data.json();
//   };

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = restoMenu.find((item) => item.id === Number(resId));

  if (!restaurant) {
    return <h1>Restaurant Not Found</h1>;
  }

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurant.name}</h1>
      <p className="font-bold text-lg">{restaurant.description}</p>
      <p className="font-bold text-lg">{restaurant.priceForTwo}</p>
      <p className="font-bold text-lg">{restaurant.deliveryTime}</p>

      <h2 className="font-bold my-6 text-2xl">Menu</h2>
      <ul className="font-bold text-lg">
        {restaurant.menu.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      <h2 className="font-bold my-6 text-2xl">Reviews</h2>
      <ul className="font-bold text-lg">
        {restaurant.reviews.map((review, index) => (
          <li key={index}>
            {review.user} ⭐ {review.rating} - {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
