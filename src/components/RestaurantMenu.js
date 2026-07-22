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
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>{restaurant.priceForTwo}</p>
      <p>{restaurant.deliveryTime}</p>

      <h2>Menu</h2>
      <ul>
        {restaurant.menu.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
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
