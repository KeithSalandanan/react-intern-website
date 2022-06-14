import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const spacingFeatureTop =
  "pt-md-5 pt-lg-5 pt-xl-0 mt-lg-2 mt-xl-3 mt-xxl-3 py-xl-5 py-xxl-5";

const FeatureContent = () => {
  return (
    <>
    <Container
      fluid
      className="py-5 pt-md-5 pt-xxl-5 pb-xl-5"
      // style={{ backgroundColor: "#ffcd45" }}
    >
      <Stack
        gap={2}
        className="d-flex text-center"
        // style={{ backgroundColor: "#f58442" }}
      >
        <h1>Oqulo Features at a Glance.</h1>
        <p>Powerful functionalities that changes the way you do business.</p>
      </Stack>
    </Container> 


      <Container fluid className="mt-md-5 mt-xl-5 pt-md-5 pt-xl-5">
      <Row
        className={
          "d-flex justify-content-center ftr-mid-itm row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-xl-0" +
          spacingFeatureTop
        }
        // style={{ backgroundColor: "#f58442" }}
      >
        {/* Start of Column 1*/}
        <Col
          fluid
          className="w-40 d-flex order-md-1 order-lg-1 order-xl-1"
          // style={{ backgroundColor: "#7bf542" }}
        >
          {/*Inside  of Column 1 */}
          <Row className="g-2 g-md-2 g-lg-1 g-xl-1 g-xxl-2">
            {/* Feature 1 */}
            <Container fluid className="d-flex">
              <Container
                fluid
                className="ftr-ico d-flex justify-content-center order-md-2 order-lg-2"
              >
                <div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/hand-graving-smartphone.png")}
                    alt=""
                  />
                </div>
              </Container>
              <Container
                fluid
                className="ft-desc px-2 order-md-1 order-lg-1 order-xl-1 text-md-end text-lg-end"
              >
                <Stack>
                  <h6>Powerful Space Management</h6>
                  <p>
                    <small>
                      Manage meeting room and desk bookings, create events, sell
                      tickets, schedule private office showings, automate
                      invoicing and connect with members --- all in one central
                      dashboard.
                    </small>
                  </p>
                </Stack>
              </Container>
            </Container>

            {/* Feature 2 */}
            <Container fluid className="d-flex h-50">
              <Container
                fluid
                className="ftr-ico d-flex justify-content-center order-md-2 order-lg-2 order-xl-2"
              >
                <div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/finger-touching-tablet-screen.png")}
                    alt=""
                  />
                </div>
              </Container>
              <Container
                fluid
                className="ft-desc px-2 order-md-1 order-lg-1 order-xl-1 text-md-end text-lg-end"
              >
                <Stack>
                  <h6>Painless Integration</h6>
                  <p>
                    <small>
                      No matter what your website is built on. Oqulo is easy to
                      setup and integrate with CRM and payment gateways. Go live
                      in a matter of days.
                    </small>
                  </p>
                </Stack>
              </Container>
            </Container>
          </Row>
        </Col>

        {/* Start of Column 2 - will be inserted last when xxl size*/}
        <Col
          className="w-40 d-flex order-md-3 order-lg-3 order-xl-3"
          // style={{ backgroundColor: "#9b42f5" }}
        >
          <Row className="g-2 g-md-2 g-xxl-2">
            {/* Feature 3 */}
            <Container fluid className="d-flex h-50">
              <Container
                fluid
                className="d-flex ftr-ico justify-content-center"
              >
                <div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/mobile-application.png")}
                    alt=""
                  />
                </div>
              </Container>
              <Container fluid className="ft-desc px-2">
                <Stack>
                  <h6>User-Friendly Interface</h6>
                  <p>
                    <small>
                      Clients will find it easy to book and pay for their space,
                      thanks to Oqulo's easy navigation and pixel-perfect
                      design. Keep members up to date with °quids community
                      board and help desk features.
                    </small>
                  </p>
                </Stack>
              </Container>
            </Container>

            {/* Feature 4 */}
            <Container fluid className="d-flex h-50">
              <Container
                fluid
                className="d-flex ftr-ico justify-content-center"
              >
                <div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/smartphone-blocked.png")}
                    alt=""
                  />
                </div>
              </Container>
              <Container fluid className="ft-desc px-2">
                <Stack>
                  <h6>Secure Data & White Label Branding</h6>
                  <p>
                    <small>
                      Get peace of mind in knowing that client information and
                      sales data are stored in a secure server. Our white label
                      service allows you to market this platform as your own.
                    </small>
                  </p>
                </Stack>
              </Container>
            </Container>
          </Row>
        </Col>

        <Col className="w-20 order-3 order-md-2 order-lg-2 order-xl-2 overflow-visible d-flex h-auto justify-content-center">
          <div className="w-100 d-flex justify-content-center ftr-holder-itm">
            <img
              src={require("../assets/img/screen.png")}
              alt=""
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default FeatureContent;
