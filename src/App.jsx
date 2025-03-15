import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar expand="md" style={{ backgroundColor: "#E8E2D6" }}>
      <Container>
        <Navbar.Brand href="index.html">
          <img src="/image/111111111111.png" alt="YYJ" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <NavDropdown title="ABOUT US" id="about-us-dropdown">
              <NavDropdown.Item href="about us/aboutus.html">設計理念</NavDropdown.Item>
              <NavDropdown.Item href="about us/aboutus.html">環保里程</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="商品簡介" id="product-dropdown">
              <NavDropdown.Item href="商品簡介/product.html">Ocean Threads</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://ecolife2.moenv.gov.tw/Coastal/SeaCleanEvent/SeaCleanEvent" active>
              淨灘活動
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/image/8.jpg" alt="飾品示意圖" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/image/Ocean Treads (2).png" alt="threads" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/image/Ocean Treads (3).png" alt="..." />
      </Carousel.Item>
    </Carousel>
  );
};

const HomeSection = () => {
  return (
    <div className="text-center p-4">
      <img id="home_product1" src="image/home_product1.webp" alt="home product" className="w-250" />
      <br />
      <p>
        在美麗的飾品中傳遞對海洋的守護之心。
        <br />
        不只是一條手鍊，更是一場關於海洋與自己的對話
      </p>
      <div className="d-flex justify-content-center gap-1">
        <a href="商品簡介/product.html">
          <img id="home_product2" src="/image/home_product2.webp" className="zoom-image w-50"  alt="product 2" />
        </a>
        <a href="商品簡介/product.html">
          <img id="home_product3" src="/image/home_product3.webp" className="zoom-image w-50" alt="product 3" />
        </a>
        <a href="商品簡介/product.html">
          <img id="home_product4" src="/image/home_product4.webp" className="zoom-image w-50" alt="product 4" />
        </a>
      </div>
      <br /><br />
      <a href="about us/aboutus.html">
        <Button variant="outline-primary" className="mt-3">查看更多</Button>
      </a>
      <br /><br />
    </div>
    
  );
};

const Footer = () => {
  return (
    <div className="container-expand-lg text-center p-4" style={{ backgroundColor: "#E8E2D6" }}>
      <div className="row">
        <div className="col"></div>
        <div className="col-4">
          <p id="letter">
            <strong>購買須知</strong>
            <br />
            下單與售後服務
            <br />
            隱私權申明
          </p>
        </div>
        <div className="col-4">
          <p id="letter">
            <strong>聯絡我們</strong>
            <br />
            service@yyj.com
            <br />
            平日10:00-18:00
          </p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navigation />
      <CarouselComponent />
      <HomeSection />
      <Footer />
    </div>
  );
};

export default App;

