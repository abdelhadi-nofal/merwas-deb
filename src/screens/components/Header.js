import React, { useState } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Dropdown,
  Form,
  FormControl,
  Col,
  Tab,
  Row,
} from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdbreact";

function Header() {
  const [open, setOpen] = useState(true);

  const openDeiv = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <header>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">GrabOne</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navheader">
              <i
                className="fas fa-map-marker-alt fa-lg my-3"
                style={{
                  marginLeft: "900px",
                  paddingTop: "3px",
                  color: "white",
                }}
              ></i>
              <NavDropdown title=" Auckland " id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="d-none d-md-block" href="#home">
                <i
                  style={{ color: "white" }}
                  className="fas fa-shopping-cart fa-lg"
                ></i>
              </Nav.Link>
              <Nav.Link className="d-none d-md-block" href="#link">
                <i
                  style={{ color: "white" }}
                  className="far fa-heart fa-lg"
                ></i>
              </Nav.Link>
              <i
                className="far fa-user fa-lg my-3 d-none d-md-block"
                style={{
                  marginLeft: "10px",
                  paddingTop: "3px",
                  color: "white",
                }}
              ></i>
              <NavDropdown
                className="d-none d-md-block"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="d-none d-md-block"
                href="# Subscribe
"
              >
                <i
                  style={{ color: "white" }}
                  className="fas fas fa-envelope fa-lg"
                ></i>
              </Nav.Link>
              <Nav.Link
                className="d-none d-md-block"
                href="# Subscribe
"
              >
                Subscribe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="statheader d-none d-sm-block">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navheader">
                <a onClick={openDeiv} className="alin mx-2" href="#">
                  Browse Categories ⌄{" "}
                </a>

                <a className="alin mx-2" href="#">
                  What`s New{" "}
                </a>
                <a className="alin mx-2" href="#">
                  Trending{" "}
                </a>
                <a className="alin mx-2" href="#">
                  You
                </a>
                <a className="alin mx-2" href="#">
                  Products{" "}
                </a>

                <Form style={{ position: "relative", marginLeft: "500px" }}>
                  <FormControl
                    name="query"
                    type="text"
                    value=""
                    placeholder="Search GrabOne "
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                  />
                  <i
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "10px",
                    }}
                    className="fa fa-search"
                  ></i>
                  <button
                    hidden
                    id="search-bar-submit"
                    type="submit"
                    class="search-bar__search-button"
                  >
                    <span>Search</span>
                  </button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Container hidden={open} className="opendiv ">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="forth">Tab 4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  If there be nothing new, but that which is Hath been before,
                  how are our brains beguil'd, Which labouring for invention
                  bear amiss The second burthen of a former child! O! that
                  record could with a backward look, Even of five hundred
                  courses of the sun, Show me your image in some antique book,
                  Since mind at first in character was done! That I might see
                  what the old world could say To this composed wonder of your
                  frame;
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Create a set of NavItems each with an eventKey corresponding
                  to the eventKey of a TabPane. Wrap the whole thing in a
                  TabContainer and you have fully functioning custom tabs
                  component. Check out the below example making use of the grid
                  system and pills.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Dynamic tabbed interfaces should not contain dropdown menus,
                  as this causes both usability and accessibility issues. From a
                  usability perspective, the fact that the currently displayed
                  tab’s trigger element is not immediately visible (as it’s
                  inside the closed dropdown menu) can cause confusion. From an
                  accessibility point of view, there is currently no sensible
                  way to map this sort of construct to a standard WAI ARIA
                  pattern,
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                  Trigger element is not immediately visible (as it’s inside the
                  closed dropdown menu) can cause confusion. From an
                  accessibility point of view, there is currently no sensible
                  way to map this sort of construct to a standard WAI ARIA
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  TabPane. Wrap the whole thing in a TabContainer and you have
                  fully functioning custom tabs component. Check out the below
                  example making use of the grid system and pills.
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </header>
  );
}

export default Header;
