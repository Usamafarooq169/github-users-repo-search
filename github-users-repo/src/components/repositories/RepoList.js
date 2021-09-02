import RepoDetail from "./RepoDetail";
import Item from "../layout/Item";

const RepoList = (props) => {
  return (
    <div className="mt-4">
      {props.repos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          url={item.html_url}
          username={props.username}
          userUrl={props.userUrl}
          focusLanguage={item.language}
          isPrivate={item.private}
        />
      ))}
    </div>
  );
};

export default RepoList;
