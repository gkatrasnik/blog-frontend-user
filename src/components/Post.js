import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function Post(props) {
  let comments = props.item.comments;

  return (
    <Card style={{ width: "80%", maxWidth: "32rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title className="text-center">{props.item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Author: {props.item.user}
        </Card.Subtitle>
        <Card.Text>{props.item.content}</Card.Text>
        <Card.Text>Comments:</Card.Text>

        {comments.map((comment, index) => {
          return (
            <Card.Text comment={comment} key={index}>
              {comment}
            </Card.Text>
          );
        })}
        <Button variant="primary" className="float-end">
          Comment
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
