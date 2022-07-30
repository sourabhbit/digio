import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { staticText } from "../../constants";
import digilogo from "../../assests/digiologo.jpg";
import "./styles.css";

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={digilogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        {/* <Nav className="me-auto">
          <Nav.Link href="#">{staticText.ABOUT_US}</Nav.Link>
          <Nav.Link href="#">{staticText.TECHNOLOGY}</Nav.Link>
          <Nav.Link href="#">{staticText.CONTACT_US}</Nav.Link>
        </Nav> */}
      </Container>
    </Navbar>
  );
}
