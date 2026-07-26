import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1 className="font-bold">User: {loggedInUser}</h1>
      <User name={"Akarshika (func)"} location={"Lucknow"} />

      <UserClass name={"Akarshika (class)"} location={"Lucknow"} />
    </div>
  );
};

export default About;
