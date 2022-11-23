import React from "react";
import MainNavbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import products from "../assets/products";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./productdetails.scss";
import {ArrowForward,ShoppingCartOutlined} from '@mui/icons-material';

function ProductDetails() {
  const { name } = useParams();
  const thisProduct = products.find((prod) => prod.name === name);
  return (
    <>
      <MainNavbar />
      <Container>
        <h1 className="title mt-5 text-center">Product details</h1>
        <Row className="mt-3 me-5 ">
          <Col xs="5" style={{ height: "100vh" }}>
            <Row>
              <img
                className="border"
                src={thisProduct.image}
                style={{ width: "100%", height: "50%" }}
                alt=""
              />
            </Row>
            <Row>
              <Col className="mt-2" style={{ padding: "0" }}>
                <img
                  className="border"
                  src={thisProduct.image}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </Col>
              <Col className="mt-2 ms-1" style={{ padding: "0" }}>
                <img
                  className="border"
                  src={thisProduct.image}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
          <Col xs="5 " className="ms-2">
            <h1 style={{fontWeight:'bold',color:'#FF6C18'}}>{thisProduct.name}</h1>
            <p>{thisProduct.description}</p>
            <p>
              <span
                className="me-5"
                style={{ color: "#ff6c18", fontWeight: "bold" }}
              >
                Color:
              </span>
              {thisProduct.color}
            </p>
            <p>
              <span
                className="me-5"
                style={{ color: "#ff6c18", fontWeight: "bold" }}
              >
                Wood:
              </span>
              {thisProduct.type}
            </p>
            <p
              className="float-end"
              style={{ color: "#ff6c18", fontWeight: "bold", fontSize: "3rem" }}
            >
              <sup
                style={{
                  color: "#707070",
                  fontWeight: "normal",
                  textDecoration: "line-through",
                }}
              >
                {thisProduct.oldPrice}$
              </sup>
              {thisProduct.price}$
            </p>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col xs="7" className="ms-4">
              <Button className="add-button">Add to cart<ShoppingCartOutlined fontSize="large" /></Button>
              </Col>
              <Col xs="3" className="ms-auto">
              <input  type={"number"}></input>
              </Col>

            </Row>
          </Col>
          <Col xs="1"><a href="/products" style={{color:"#707070"}}><ArrowForward fontSize="large" /></a></Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetails;
