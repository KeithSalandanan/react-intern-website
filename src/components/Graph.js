import React from 'react'
import GraphContent from './GraphContent';
import { Container } from 'react-bootstrap';

// const myMargin = "px-xl-5";
// const myPadding = "px-xl-5";

const myMargin = "px-2 px-sm-3 px-md-3 px-xl-5 px-xxl-5 pt-sm-5 pt-5";
const myPadding =
  "px-2 px-sm-3 px-md-3 px-xl-5 px-xxl-5 mt-5 mt-sm-5 pt-3 pt-lg-3";

const Graph = () => {
  return (
    <section>
      <Container fluid className={myPadding}>
        <Container fluid className={myMargin}>
          <GraphContent />
        </Container>
      </Container>
    </section>
  );
}

export default Graph