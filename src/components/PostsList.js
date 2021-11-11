import React, { useState, useEffect } from "react";
import Post from "./Post";

function PostsList(props) {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    getPostsData();
  }, []);

  const getPostsData = () => {
    const url = "http://localhost:4000/api/posts";
    const options = {
      method: "GET",
    };

    fetch(url, options).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setPostsList(data);
      });
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
