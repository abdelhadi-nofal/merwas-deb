import React from "react";
import { Col, Card, Row, Container } from "react-bootstrap";

function FeaturedAuckland() {
  const products = [
    {
      id: 1,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 2,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 3,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 4,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 5,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 6,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 7,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 8,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
    {
      id: 9,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up thebulk of the cards content.",
      img: "https://main-cdn.grabone.co.nz/goimage/fullsize/04415f855d95d575353119fea8cd15609e6e0e9f.jpg",
    },
  ];
  return (
    <Container className="my-3">
      <Row>
        {products.map((item) => (
          <Col className="py-2" key={item.id} sm={11} md={8} lg={4}>
            <Card className="card">
              <div className="cont">
                <Card.Img className="imghov" variant="top" src={item.img} />
                <Container className="overlay">
                  <Container className="text">
                    Hover over the image to see the effect.
                  </Container>
                </Container>
              </div>
              <Card.Body className="cardbod">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedAuckland;
