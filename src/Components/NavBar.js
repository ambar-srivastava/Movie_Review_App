import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=ffa33be0ffbd4264599107c3f8f30b33&query=";

const NavBar = (props) => {
  const [search, setSearch] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    fetch(SEARCH_API + search)
      .then((res) => res.json())
      .then((data) => {
        props.setMovies(data.results);
      });
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movie Review App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Form onSubmit={handleOnSubmit} className="d-flex">
              <FormControl
                value={search}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleOnChange}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
