import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

function PostsList(props) {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    getPostsData();
  }, []);

  const getPostsData = () => {
    axios
      .get("/api/posts")
      .then((response) => {
        console.log(response.data);
        setPostsList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ul style={{ padding: 0 }}>
      {postsList.map((item, index) => {
        return (
          <li
            key={index}
            className="d-flex flex-direction-column justify-content-center"
          >
            <Post item={item} index={index} />
          </li>
        );
      })}
    </ul>
  );
}

export default PostsList;
