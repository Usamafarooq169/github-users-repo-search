import RepoDetail from "./RepoDetail";

const RepoList = (props) => {
  return (
    <div className="ui grid">
      {props.repos.map((item) => (
        <RepoDetail
          key={item.id}
          id={item.id}
          name={item.name}
          url={item.html_url}
        />
      ))}
    </div>
  );
};

export default RepoList;
