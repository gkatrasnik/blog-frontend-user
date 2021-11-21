import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

function PostsList(props) {
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPostsData();
  }, []);

  const getPostsData = () => {
    setLoading(true);
    axios
      .get("/api/posts")
      .then((response) => {
        setPostsList(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loading && (
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          "Loading Posts..."
        </h2>
      )}
      <ul style={{ padding: 0 }}>
        {postsList.map((item, index) => {
          return (
            <li
              key={index}
              className="d-flex flex-direction-column justify-content-center"
            >
              <Post getPostsData={getPostsData} item={item} index={index} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PostsList;
