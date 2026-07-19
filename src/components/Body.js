import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [listOfResto, setlistOfResto] = useState(restoList[0].recipes);
  const [filteredResto, setfilteredResto] = useState([]);
  const [searchText, setsearchText] = useState([]);

  setlistOfResto(json.recipes);
  setfilteredResto(json.recipes);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8324151&lng=80.92915119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   );

  //   const json = await data.json();
  //   console.log(json);
  // };
  if (listOfResto.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredResto = listOfResto.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setfilteredResto(filteredResto);
            }}
          >
            Search
          </button>
        </div>
        <div className="filtered-btn"></div>
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
        {filteredResto.map((recipe) => (
          <RestaurantCard key={recipe.id} restoData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Body;
