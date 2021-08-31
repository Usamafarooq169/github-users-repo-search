import github from "../../components/apis/github";

export const getUser = (username) => {
  return async (dispatch) => {
    const response = await github.get(`/${username}`);

    dispatch({ type: "GET_USER", payload: response.data });
  };
};

export const getRepos = (username) => {
  return async (dispatch) => {
    const response = await github.get(`/${username}/repos`);

    dispatch({ type: "GET_REPOS", payload: response.data });
  };
};
