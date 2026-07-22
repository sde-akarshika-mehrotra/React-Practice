import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is an about component</h2>
      <User name={"Akarshika (func)"} location={"Lucknow"} />

      <UserClass name={"Akarshika (class)"} location={"Lucknow"} />
    </div>
  );
};

export default About;
