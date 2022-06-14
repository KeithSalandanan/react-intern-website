import React from 'react'
import { Container } from "react-bootstrap";
import NavContent from "./NavContent";
import HeaderContent from "./HeaderContent";

const myMargin = "px-2 px-sm-3 px-md-3 px-xl-5 px-xxl-5";
const myPadding = "px-2 px-sm-3 px-md-3 px-xl-5 px-xxl-5 pt-3 pt-lg-5";

const myPadding2 = "px-2 px-sm-3 px-md-3 px-xl-5 px-xxl-5";



const Header = () => {
  return (
    <header className='masthead'>
        <Container fluid className={myPadding}>
        <Container fluid className={myPadding2}>
        <Container fluid className={myMargin} >
            <NavContent />
            <HeaderContent />
            {/* <h1 style={{ backgroundColor: "#afafaf" }}>Hello World</h1> */}
            {/* <PageContent /> */}
          </Container>
        </Container>
        </Container>
    </header>
  );
}

export default Header