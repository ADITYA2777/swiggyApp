

import { createContext, } from "react";

const UserContext = createContext({
  user: {
    name: "aditya jain",
    email: "support@gmail",
  },
});

export default UserContext;