export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};
