import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

function Post(props) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");

  let comments = props.item.comments;

  const submitHandler = () => {
    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Origin": "*",
    };

    var data = {
      author: commentAuthor,
      content: commentContent,
    };

    var postId = props.item._id;

    var url = `http://localhost:4000/api/posts/${postId}/comments`;

    console.log("url", url);

    fetch(url, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));
  };

  return (
    <Card style={{ width: "80%", maxWidth: "32rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title className="text-center">{props.item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Author: {props.item.user.username}
        </Card.Subtitle>
        <Card.Text>{props.item.content}</Card.Text>
        <br />
        <Card.Text>Comments:</Card.Text>

        {comments.map((comment, index) => {
          return (
            <Card.Text comment={comment} key={index}>
              {comment.author}: {comment.title}
              {comment.content}
            </Card.Text>
          );
        })}
        <Button
          variant="primary"
          className="float-end"
          className="my-2"
          onClick={() => {
            setShowCommentForm(!showCommentForm);
          }}
        >
          Comment
        </Button>
        {showCommentForm && (
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your nickname"
                onChange={(e) => {
                  setCommentAuthor(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type your comment"
                onChange={(e) => {
                  setCommentContent(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}

export default Post;
