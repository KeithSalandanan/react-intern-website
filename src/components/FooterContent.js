import React from "react";
import { Container, Row, Col, Form, Button, Stack, Nav } from "react-bootstrap";

const footerAtrrib = "";

const Footer = () => {
  return (
    <footer>
      <section className="footerSubscribe px-5 py-5">
        <Container fluid className={footerAtrrib + " py-lg-3"}>
          <Stack fluid className="d-flex text-center py-lg-5">
            <h1>Launching Soon</h1>
            <p>Sign up to get updates on Oqulo's public release</p>
            <Container
              fluid
              className="d-flex justify-content-center ftGrp"
            >
              <Form className="w-100 px-xl-5">
                <Row className="g-1">
                  <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <Form.Control
                      className="frm"
                      type="email"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                    <Button
                      variant="primary"
                      className="w-auto frm text-uppercase text-center"
                    >
                      Try the Beta
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Stack>
        </Container>
      </section>
      <section className="footerNav py-5 py-lg-5">
        <Container fluid className={footerAtrrib + " py-lg-5 "}>
          <Stack fluid className="w-100 d-flex text-center">
            <div>
              <img
                className="img-fluid"
                src={require("../assets/img/Layer 1.png")}
                alt=""
              />
            </div>
            <Container
              fluid
              className="d-flex px-0 justify-content-center py-4 pb-md-5"
            >
              <Nav className="d-flex text-uppercase justify-content-center flex-column flex-sm-row">
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
            </Container>
            <p className="content-p text-center">
              Copyright &copy; Oqulo 2018. All rights reserved
            </p>
          </Stack>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
