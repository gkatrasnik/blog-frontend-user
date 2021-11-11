import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import PostsList from "./components/PostsList";

function App() {
  return (
    <Container fluid>
      <Navbar style={{ borderBottom: "1px solid black" }}>
        <Container>
          <Navbar.Brand>
            <h3>My Blog</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <PostsList />
    </Container>
  );
}

export default App;
