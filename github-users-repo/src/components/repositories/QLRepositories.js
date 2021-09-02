import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import FetchedUserDetails from "../layout/FetchedUserDetails";

export default function QLRepositories(props) {
  //   useEffect(() => {
  //     userRepos = [];
  //   }, [props.username]);

  const [userRepos, setUserRepos] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  return (
    <>
      <Query
        query={gql`
        
        {
          user(login: "${props.username}") {
            avatarUrl,
            bio,
            login,
            id,
            location,
            url,
            repositories(first: 100) {
              nodes {
                name
                id
                createdAt
                url
                isPrivate
              }
            }
          }
        }
      `}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading Data...</p>;
          }
          if (error) {
            return <p>Error occurred</p>;
          }

          return (
            <FetchedUserDetails
              username={data.user.login}
              userId={data.user.id}
              avatarUrl={data.user.avatarUrl}
              userBio={data.user.bio}
              reposUrl="N/A"
              location={data.user.location}
              totalRepos="N/A"
              repos={data.user.repositories.nodes}
              isQL="TRUE"
              userUrl={data.user.url}
            />
          );
        }}
      </Query>
    </>
  );
}
