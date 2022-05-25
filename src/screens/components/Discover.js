import React from "react";
import { Col, Row, ListGroup, Card, Container } from "react-bootstrap";

function Discover() {
  return (
    <Container className="cards">
      <Row>
        <Col className="d-none d-md-block">
          {" "}
          <ListGroup className="sidebar">
            <ListGroup.Item>
              <h3 style={{ color: "#85ceff", float: "left" }}>Discover</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <a href="#">Morbi leo risus</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col className="py-2">
          <Card className="card">
            <div className="cont">
              <Card.Img
                className="imghov"
                variant="top"
                src="https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg"
              />
              <Container className="overlay">
                <Container className="text">
                  Hover over the image to see the effect.
                </Container>
              </Container>
            </div>
            <Card.Body className="cardbod">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                thebulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="py-2">
          <Card className="card">
            <div className="cont">
              <Card.Img
                className="imghov"
                variant="top"
                src="https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg"
              />
              <Container className="overlay">
                <Container className="text">
                  Hover over the image to see the effect.
                </Container>
              </Container>
            </div>
            <Card.Body className="cardbod">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                thebulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Discover;
