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

export const getReposAuth = (username, accessToken) => {
  return async (dispatch) => {
    const response = await github.get(`/${username}/repos`, {
      params: { headers: { Authorization: accessToken } },
    });

    dispatch({ type: "GET_REPOS_AUTH", payload: response.data });
  };
};
