import User from "./User";
import UserClass from "./UserClass";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("parent compnenet did mount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About class component</h1>
        <h2>this is OG react learning</h2>
        <UserClass name={"First"} location={"America"} />
        <User name={"karan"} location={"US"} />

        <UserContext.Consumer>
          {({ LoggedinUser }) => (
            <h1 className="font-bold text-xl">{LoggedinUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
