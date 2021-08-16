import { Button } from "bootstrap";
import React from "react";
import bikePhoto from "../../images/Frame.png";
import busPhoto from "../../images/Frame-1.png";
import trainPhoto from "../../images/Group.png";
import {
  Card,
  CardGroup,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Rider's Choice</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/mycomponent">Destination</Nav.Link>
              <Nav.Link href="/blog">About Us</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <div style={{ width: 1800 }}>
        <Container>
          <CardGroup style={{ width: 1450 }}>
            <Row className="justify-content-md-center">
              <Col>
                
                <Card>
                  <Card.Img
                    variant="top"
                    src={bikePhoto}
                    style={{ width: 250 }}
                  />
                  <Card.Body>
                    <Card.Title>Bike</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                
                <Card>
                  <Card.Img
                    variant="top"
                    src={busPhoto}
                    style={{ width: 250 }}
                  />
                  <Card.Body>
                    <Card.Title>Bus</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={trainPhoto}
                    style={{ width: 250 }}
                  />
                  <Card.Body>
                    <Card.Title>Train</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Container>
      </div>
    </div>
  );
};

export default Home;
