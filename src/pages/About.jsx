import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Container className="text-center" style={{width:"978px", maxWidth:"100%" }}>
        <h1 className="title mt-5">About App</h1>
        <Row className="mt-5">
          <Col xs="5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlt47G47z3xGBNUTAKfotIDSrYEikdN0r6YQ&usqp=CAU"
              alt=""
            />
          </Col>
          <Col xs="5" className="text-start" style={{fontSize:'24px'}}>
            <p style={{color:"#ff6c18"}}>About us</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
