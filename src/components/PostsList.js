import React, { useState, useEffect } from "react";
import Post from "./Post";

function PostsList(props) {
  const [postsList, setPostsList] = useState(["a", "b", "c"]);

  return (
    <ul style={{ padding: 0 }}>
      {postsList.map((item, index) => {
        return (
          <li className="d-flex flex-direction-column justify-content-center">
            <Post key={index} item={item} index={index} />
          </li>
        );
      })}
    </ul>
  );
}

export default PostsList;
