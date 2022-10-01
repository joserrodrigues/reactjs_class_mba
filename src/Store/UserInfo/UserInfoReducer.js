const userInfoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_USER_NAME":
      const userName = action.payload;
      return {
        ...state,
        userName,
      };

    case "CHANGE_AGE":
      const email = action.payload;
      return {
        ...state,
        email,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default userInfoReducer;
