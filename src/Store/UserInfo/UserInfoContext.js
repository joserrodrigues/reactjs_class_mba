import { createContext } from "react";

const UserInfoContext = createContext({
  userInfo: {
    userName: "",
    email: "",
  },
  changeUserName: (userName) => {},
  changeEmail: (email) => {},
});

export default UserInfoContext;
