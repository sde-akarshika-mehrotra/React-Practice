import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restoList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResto, setlistOfResto] = useState(restoList[0].recipes);
  const [filteredResto, setfilteredResto] = useState(restoList[0].recipes);
  const [searchText, setsearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return (
      <h1>Looks like you're offline! Please check your internet connection</h1>
    );

  return (
    
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfResto.filter(
                (resto) => resto.rating > 4.5,
              );
              setfilteredResto(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredResto.map((recipe) => (
          <Link key={recipe.id} to={"restaurants/" + recipe.id}>
            {recipe.promoted ? (
              <RestaurantCardPromoted restoData={recipe} />
            ) : (
              <RestaurantCard restoData={recipe} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
