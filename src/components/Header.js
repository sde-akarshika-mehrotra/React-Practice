import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  

  return (
    <div className="flex justify-between shadow-lg bg-gray-500">
      <div className="">
        <img className="w-46" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">Online Status : {OnlineStatus ? "✅" : "⚠️"}</li>

          <li className="p-4">
            <Link to="/">HOME</Link>
          </li>

          <li className="p-4">
            <Link to="/about">ABOUT US</Link>
          </li>

          <li className="p-4">
            <Link to="/contact">CONTACT US</Link>
          </li>

          <li className="p-4">
            <Link to="/grocery">GROCERY</Link>
          </li>
          
          <li className="p-4">
            <Link to="/cart">CART</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              setbtnName("Logout");
            }}
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
