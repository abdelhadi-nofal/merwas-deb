import React from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";

function Best() {
  return (
    <Container className="best">
      <Row>
        <Col md={8}>
          <h4>Get the best deals delivered direct to your inbox each day</h4>
        </Col>
        <Col>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Best;
