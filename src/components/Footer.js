import React from 'react'
import { Container } from 'react-bootstrap';
import FooterContent from './FooterContent';

const myMargin = "";
const myPadding = "";

const Footer = () => {
  return (
    <section className="">
      <Container fluid className="px-0">
        <Container fluid className="px-0">
          <FooterContent/>
        </Container>
      </Container>
    </section>
  );
}

export default Footer