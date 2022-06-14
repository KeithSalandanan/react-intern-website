import React from "react";
import { Container } from "react-bootstrap";
import FeatureContent from "./FeatureContent";

const myMargin = "px-md-3 px-lg-3 px-xl-5";
const myPadding = "px-md-0 px-xl-4";

const myPadding2 = "px-md-0 px-xl-5";

const Feature = () => {
  return (
    <section className="feature-section">
      <Container fluid className={myPadding}>
        <Container fluid className={myMargin}>
          <FeatureContent />
        </Container>
      </Container>
    </section>
  );
};

export default Feature;
