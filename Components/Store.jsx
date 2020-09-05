import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Feed from "./Feed";

const initialState = {
  feedPosts: [
    { id: 1, title: "title1", description: "ahgfdsfguwiqoflq" },
    { id: 2, title: "title2", description: "ahgfdsfguwiqoflq" },
    { id: 3, title: "title3", description: "ahgfdsfguwiqoflq" },
    { id: 4, title: "title4", description: "ahgfdsfguwiqoflq" },
    { id: 5, title: "title5", description: "ahgfdsfguwiqoflq" },
    { id: 6, title: "title6", description: "ahgfdsfguwiqoflq" },
  ],
};

function reducer(state = initialState, action) {
  if (action.type === "GET_FEEDPOSTS") {
    {
      state.feedPosts.map((p) => {
        return (
          <li key={p.id}>
            <h1>{p.title}</h1>
            <p>{p.description}</p>;
          </li>
        );
      });
    }
  }
}

const store = createStore(reducer);

store.dispatch({ type: "GET_FEEDPOSTS" });

function Data() {
  return (
    <>
      <Provider store={store}>
        <Feed />
      </Provider>
    </>
  );
}

export default Data;
