import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import { useState,useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { Container, Nav,Navbar,Offcanvas } from "react-bootstrap";
import './navbar.scss'


function MainNavbar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <Navbar bg="light" expand="md"  >
          <Container >
            <Navbar.Brand href="/"><ShoppingCartOutlined fontSize="large" /> My Shoopy</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{color:"#FF6C18",fontSize:"36px"}} id={`offcanvasNavbarLabel-expand-sm`}>
                <ShoppingCartOutlined fontSize="large" /> My Shoopy
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/about" className={"nav-Link mx-2" + (url === "/about" ?" active" : "")}>About App</Link>
                  <Link to="/qa" className={"nav-Link mx-2" + (url === "/qa" ?" active" : "")}>FAQ</Link>
                  <Link to="/products" className={"nav-Link mx-2" + (url === "/products" ?" active" : "")}>Products</Link>
                  <Link to="/" className={"nav-Link mx-2" + (url === "/" ?" active" : "")}>Home</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default MainNavbar;
