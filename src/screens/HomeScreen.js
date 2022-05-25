import React from "react";
import { Row, Image, Container } from "react-bootstrap";
import Best from "./components/Best";
import Discover from "./components/Discover";
import FeaturedAuckland from "./components/FeaturedAuckland";

function HomeScreen() {
  return (
    <div>
      {/* <Container> */}
      <img
        className="img-fluid "
        src="https://mediacdn.grabone.co.nz/asset/3pC7sBYlTK"
        style={{
          width: "70%",
          height: "auto",
        }}
        alt="..."
      />
      {/* </Container> */}

      <Container className="d-none d-sm-block">
        <p>
          For savings on big brands you love,{" "}
          <span style={{ color: "#85ceff" }}>register here.</span>
        </p>
      </Container>

      <Discover />

      <Best />

      <FeaturedAuckland />
    </div>
  );
}

export default HomeScreen;
