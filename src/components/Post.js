import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function Post(props) {
  return (
    <Card style={{ width: "80%", maxWidth: "32rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title className="text-center">Post Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Post author - user
        </Card.Subtitle>
        <Card.Text>Post content</Card.Text>
        <Button variant="primary" className="float-end">
          Comment
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
