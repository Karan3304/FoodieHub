import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("hello")
    // }, 1000);
    // console.log("UseEffect");
    // return ()=>{
    //   clearInterval(timer);
    //   console.log("useEffect returned");
    // }
  }, []);

  console.log("render");

  return (
    <div className="user-card">
      <h1>Count1 = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h4>Contact:@karans3304</h4>
    </div>
  );
};

export default User;
