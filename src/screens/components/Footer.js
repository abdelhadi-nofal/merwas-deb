import React from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Row>Follow us on</Row>
            <Row>
              <Col>
                <h3>
                  <i className="fab fa-facebook-f"></i>
                </h3>
              </Col>
              <Col>
                <h3>
                  <i className="fab fa-twitter"></i>
                </h3>
              </Col>
              <Col>
                <h3>
                  <i className="fab fa-instagram"></i>
                </h3>
              </Col>
              <Col>
                <h3>
                  <i className="fab fa-pinterest"></i>
                </h3>
              </Col>
            </Row>
            <Row>Get app exclusive deals</Row>
            <Row>
              <Button>Download our App</Button>
            </Row>
          </Col>
          <Col className="mx-5">
            <Row>GrabOne</Row>
            <Row>Contact Us</Row>
            <Row>About Us</Row>
            <Row>Terms & Returns</Row>
            <Row>Blog</Row>
            <Row>Gift Cards</Row>
          </Col>
          <Col>
            <Row>My Account</Row>
            <Row>My Cart</Row>
            <Row>My Coupons</Row>
            <Row>FAQ</Row>
          </Col>
          <Col>
            <Row>Merchants</Row>
            <Row>Run a Deal</Row>
            <Row>Merchant Centre</Row>
          </Col>
          <Col>
            <Row>Newsletter Signup</Row>
            <Row>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Enter Email Address"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={{ color: "#85ceff" }} className="text-center py-3">
            Copyright &copy; ecommerce
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
