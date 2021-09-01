const reposReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_REPOS":
      return action.payload;
    case "GET_REPOS_AUTH":
      return action.payload;

    default:
      return state;
  }
};

export default reposReducer;
