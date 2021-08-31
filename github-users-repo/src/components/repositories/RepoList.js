import { connect } from "react-redux";

import FetchedItem from "./fetchedItem";

import { viewRecord } from "../../actions";

const FetchedList = (props) => {
  return (
    <div className="ui grid">
      {props.posts.map((item, index) => (
        <FetchedItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.body}
          index={index}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { viewRecord })(FetchedList);
