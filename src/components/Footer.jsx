import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";
import { Divider } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <Container className="text-white pt-5">
        <h1>
          <ShoppingCartOutlined fontSize="large" /> My Shoopy
        </h1>
        <Row>
          <Col>About App</Col>
          <Col>License</Col>
          <Col>Become an Affiliate</Col>
        </Row>
        <Row>
          <Col>Sitemap</Col>
          <Col>Help Center</Col>
          <Col>Terms & Conditions</Col>
        </Row>
        <hr style={{backgroundColor:"white"}} />
        <h6>
          © 2022 MyShopy STORE. Trademarks and brands are the property of their
          respective owners.
        </h6>
      </Container>
    </div>
  );
}

export default Footer;
