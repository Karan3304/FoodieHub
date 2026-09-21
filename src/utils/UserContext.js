import { createContext } from "react";

const UserContext = createContext({
  LoggedinUser: "Default user",
});

export default UserContext;
