import React, { Component } from "react";
import { connect } from "react-redux";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   feedPosts: [],
    };
  }

  //   componentDidMount() {
  //     this.props.dispatch({ type: "GET_FEEDPOSTS" });
  //   }

  //   getPosts = () => {
  // this.props.dispatch({ type: "GET_FEEDPOSTS" });
  //   };

  render() {
    return (
      <>
        <p>Feed</p>
        {/* <button onClick={this.getPosts}>Get FeedPosts</button> */}
        {this.props.feedPosts}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  feedPosts: state.feedPosts,
});

export default connect(mapStateToProps, Feed);
