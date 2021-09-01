import github from "../../components/apis/github";

export const getUser = (username) => {
  return async (dispatch) => {
    const response = await github.get(`/${username}`);

    dispatch({ type: "GET_USER", payload: response.data });
  };
};

export const getRepos = (username) => {
  return async (dispatch) => {
    const response = await github.get(`/${username}/repos`, {
      params: { per_page: 100 },
    });

    dispatch({ type: "GET_REPOS", payload: response.data });
  };
};

export const getReposAuth = (username, accessToken) => {
  return async (dispatch) => {
    const response = await github.get(`/${username}/repos`, {
      headers: { Authorization: `token ${accessToken}` },
      params: { per_page: 100 },
    });

    dispatch({ type: "GET_REPOS_AUTH", payload: response.data });
  };
};
