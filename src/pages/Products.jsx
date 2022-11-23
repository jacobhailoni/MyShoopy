import React from "react";
import MainNavbar from "../components/Navbar";
import products from "../assets/products";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import './products.scss'
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <MainNavbar />
      <Container>
        <h1 className="title text-center">Products</h1>
        <Row>
          {products.map((product) => {
            return (
              <>
                <Col>
                  <ProductCard product={product} />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Products;
