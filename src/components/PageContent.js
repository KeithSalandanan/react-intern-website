import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

const PageContent = () => {
  return (
    <Container
      fluid
      className="align-items-start w-100 py-3 my-5  py-xl-5 my-xl-5"
      // style={{ backgroundColor: "#d742f5" }}
    >
      <h2>
        Tried & Tested Space <br />
        Management Software
      </h2>

      <Row className="g-6 py-4 row-cols-1 row-cols-sm-1 row-cols-md-2  row-cols-lg-2">
        <Col
          xs={{ order: "last" }}
          sm={{ order: "last" }}
          md={{ order: "first" }}
          className="align-items-center"
        >
          <div>
            <p>
              Oqulo Is a homegrown app that's been tested by real-life
              businesses. Whether you operate on a single building or in
              multiple locations. Oqulo Is designed to make your space leasing
              operations hassle-free.
            </p>
            <p>
              Your clients will have a smooth booking & online payment
              experience. and your concierge staff will be able to view
              occupancy slats and generate reports at a click of a button.
            </p>
          </div>
        </Col>
        <Col className="align-items-center pb-5">
          <div className="content-img-container">
            <img
              src={require("../assets/img/image.png")}
              class="img-fluid content-img"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PageContent;
