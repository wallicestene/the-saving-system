
export const initialState = {
  user: null,
};
const reducer = (state, action) => {
    console.log(action)

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      throw Error("No case for that type found");
  }
};
export default reducer;
