import React from "react";
import { Nav, Container, Image, Navbar } from "react-bootstrap";
import Images from "./Images";

const NavContent = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="pb-md-5 mb-lg-5 pb-xl-0 pb-xxl-3"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image className="" src={Images.logo} alt="" height={48} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="NavbarCollapse"
          className="toggler-line"
        />
        <Navbar.Collapse
          id="NavbarCollapse"
          className="justify-content-end navContent"
        >
          <Nav className="text-uppercase">
            <Nav.Item>
              <Nav.Link>Discover Oqulo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Features</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavContent;
