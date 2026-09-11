import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>this is OG react learning</h2>
      {/* <User name={"Karan swami (function)"} location={"Indore"}/> */}
      <UserClass name={"Karan swami (class)"} location={"America"}/>
    </div>
  );
};

export default About;
