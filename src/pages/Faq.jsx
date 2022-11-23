import React from "react";
import MainNavbar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { AddOutlined, MinimizeOutlined } from "@mui/icons-material";
import "./Faq.scss";

function Faq() {
  return (
    <>
      <MainNavbar />
      <Container className="text-center" style={{ width: "905px",maxWidth:"100%" }}>
        <h1 className="title">FAQ`s</h1>
        <Accordion>
          <AccordionSummary
            className="question"
            aria-controls="question1-content"
            id="question1-header"
          >
            <Row>
              <Col xs="2">
                <AddOutlined fontSize="large" style={{ color: "#ff6c18" }} />
              </Col>
              <Col xs="10">
                <h3 className="text-start">How do I find the product?</h3>
              </Col>
            </Row>
          </AccordionSummary>
          <AccordionDetails>
            <Row>
              <Col xs="2">
                <MinimizeOutlined
                  fontSize="large"
                  style={{ color: "#ff6c18" }}
                />
              </Col>
              <Col xs="10">
                <h3 className="text-start">How do I find the product?</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 9, offset: 2 }}>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>
            <Container></Container>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            className="question"
            aria-controls="question1-content"
            id="question1-header"
          >
            <Row>
              <Col xs="2">
                <AddOutlined fontSize="large" style={{ color: "#ff6c18" }} />
              </Col>
              <Col xs="10">
                <h3 className="text-start">How do I find the product?</h3>
              </Col>
            </Row>
          </AccordionSummary>
          <AccordionDetails>
            <Row>
              <Col xs lg="2">
                <MinimizeOutlined
                  fontSize="large"
                  style={{ color: "#ff6c18" }}
                />
              </Col>
              <Col>
                <h3 className="text-start">How do I find the product?</h3>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 9, offset: 2 }}>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>
            <Container></Container>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            className="question"
            aria-controls="question1-content"
            id="question1-header"
          >
            <Row>
              <Col xs="2">
                <AddOutlined fontSize="large" style={{ color: "#ff6c18" }} />
              </Col>
              <Col xs="10">
                <h3 className="text-start">How do I find the product?</h3>
              </Col>
            </Row>
          </AccordionSummary>
          <AccordionDetails>
            <Row>
              <Col xs lg="2">
                <MinimizeOutlined
                  fontSize="large"
                  style={{ color: "#ff6c18" }}
                />
              </Col>
              <Col>
                <h3 className="text-start">How do I find the product?</h3>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 9, offset: 2 }}>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>
            <Container></Container>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}

export default Faq;
