import React from "react";
import { Container, Stack } from "react-bootstrap";

const img2 = require("../assets/img/chart.png");
const img1 = require("../assets/img/statistics.png");

const imageAtrrib = "";

const GraphContent = () => {
  return (
    <Container
      fluid
      className="my-5 pt-0 pt-sm-0 mt-sm-5 my-sm-5 my-xl-5 pt-md-0 pt-lg-0 pt-xl-0 pt-xxl-3"
    >
      <Stack
        fluid
        className="col-12 d-flex justify-content-center text-center pt-5 pt-sm-5 mt-sm-5 pt-xl-3 pt-xxl-3"
        direction="vertical"
      >
        <h1 className="firstText ">Stats Delivered Beautifully</h1>
        <h1 className="secText px-3 px-sm-5">Stats, Delivered Beautifully</h1>
        <p className="px-3 px-sm-5">
          View sales charts, booking ratio and user behavior using Oqulo's
          visual reporting feature.
        </p>
        <picture>
          <source srcSet={`${img2} 1x`} media="(max-width: 768px)" />
          <img
            className={"graphImage px-0 pt-3" + imageAtrrib}
            srcSet={`${img1} 2x`}
            alt="Full Logo"
          />
        </picture>
      </Stack>
    </Container>
  );
};

export default GraphContent;
