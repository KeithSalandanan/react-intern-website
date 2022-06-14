import React from 'react'
import PageContent from './PageContent'
import { Container } from 'react-bootstrap';

const myMargin = "px-sm-3 px-md-3 px-lg-3 px-xl-5";
const myPadding = "px-sm-3 px-md-3 px-xl-3";

const Content = () => {
  return (
    <section className="PageContent">
      <Container fluid className={myPadding}>
        <Container fluid className={myPadding}>
        <Container fluid className={myMargin}>
            <PageContent /> 
        </Container>
        </Container>
      </Container>
    </section>
  );
}

export default Content