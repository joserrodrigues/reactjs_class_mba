import { useReducer } from "react";
import UserInfoContext from "./UserInfoContext";
import UserInfoReducer from "./UserInfoReducer";

const UserInfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserInfoReducer, {
    userName: "Rubens",
    email: "",
  });

  const userInfoValue = {
    userInfo: state,
    changeUserName: (userName) => {
      dispatch({
        type: "CHANGE_USER_NAME",
        payload: userName,
      });
    },
    changeEmail: (email) => {
      dispatch({
        type: "CHANGE_EMAIL",
        payload: email,
      });
    },
  };

  return (
    <UserInfoContext.Provider value={userInfoValue}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider;
