import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResto, setlistOfResto] = useState(restoList[0].recipes);

  return (
    <div>
      <div className="search">Search</div>
      <div className="filtered-btn">
        <button
          onClick={() => {
            const filteredList = listOfResto.filter(
              (resto) => resto.rating > 4.5,
            );
            setlistOfResto(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfResto.map((recipe) => (
          <RestaurantCard key={recipe.id} restoData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Body;
