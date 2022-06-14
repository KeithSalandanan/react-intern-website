import React from 'react'
import { Container, Row, Col, Image, Form, Button, Stack } from 'react-bootstrap';

const HeaderContent = () => {
  return (
    <Container
      fluid
      className='pt-4'
    >
      <Row className="header-content">
        <Col
          className="d-flex col-md-6 justify-content-center justify-content-xl-end phoneParent"
          //   className="col-md-6 px-0 p-xl-0 "
          xs={{ order: 2 }}
          sm={{ order: 2 }}
          md={{ order: "first" }}
          lg="6"
          xl="6"
          // Yellow part
          // style={{ backgroundColor: "#cfae55", color: "#000" }}
        >
          <Image
            fluid
            src={require("../assets/img/iPhone 7.png")}
            alt=""
            className="phone"
            // style={{ backgroundColor: "#b4cf55", color: "#000" }}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl="6"
          className="px-2 px-sm-0"
          // style={{ backgroundColor: "#fcfcfc", color: "#000" }}
        >
          <Container
            fluid
            className="px-0 pb-md-5 pb-xl-5"
            // className="pt-0 mt-md-0 px-0 pt-lg-5 pt-xl-5 pt-xxl-5 mt-xxl-4"
            
            // style={{ backgroundColor: "#f8f8f8", color: "#000" }}
          >
            <Stack className="py-xl-3">
              <h1>
                The only platform You'll need to run Smart Coworking Spaces &
                Serviced Offices
              </h1>
              <p>
                Oqulo is built to sell. manage and grow your commercial real
                estate business. Collect payments, manage clients and run
                reports using our booking app. Engage members using our
                community messaging feature.
              </p>
              <p>Be the first in line to take Oqulo for a test drive!</p>
              <Container fluid="md" className="px-0">
                <Form>
                  <Row className="g-2">
                    <Col xs={12} sm={12} md={6} lg={8} xl={6} xxl={8}>
                      <Form.Control
                        className="frm"
                        type="email"
                        placeholder="Email Address"
                      />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={6} xxl={4}>
                      <Button variant="primary" className=" frm text-uppercase">
                        Notify Me
                      </Button>
                    </Col>
                  </Row>
                  <Form.Text className="form-txt">
                    *No Spam, that's a promise.
                  </Form.Text>
                </Form>
              </Container>
            </Stack>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderContent