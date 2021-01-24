import React from "react"
import downloadapp from './views/img/download-app.jpg';

import { Container, Button, Row, Col, Card } from "react-bootstrap"

function Landing() {
  return (
    <div>
      {/* hero callout */}
      <Container fluid className="d-flex flex-column text-white justify-content-center callout-jumbotron home-jumbotron">
        <h1 class="display-3">I take COVID seriously!</h1>
        <h2 class="display-5 mt-3">I vow to do my part to <span className="text-warning fw-bold">#StoptheSpread19</span></h2>
        <p><Button variant="info" href="/login" className="fs-3">Join Today</Button></p>
      </Container>

      {/* how it works */}
      <Container fluid className="text-dark">
        <div className="text-center my-5">
          <h2 class="display-5">How it Works</h2>
          <h3>It's the universe of COVID</h3>
        </div>
        <Container fluid className="text-dark my-5">
          <Row>
            <Col md={3}>
              <p><i class="fas fa-plus-circle fa-4x"></i></p>
              <h4>Create an Account</h4>
              <p>To be part of the movement</p>
            </Col>
            <Col md={3}>
              <p><i class="fas fa-user-alt fa-4x"></i></p>
              <h4>Login</h4>
              <p>To get caught back up!</p>
            </Col>
            <Col md={3}>
              <p><i class="fas fa-check-circle fa-4x"></i></p>
              <h4>Check-in</h4>
              <p>Screen Questions by category to complete the COVID check-in</p>
            </Col>
            <Col md={3}>
              <p><i class="fas fa-comments fa-4x"></i></p>
              <h4>Challenge the Community</h4>
              <p>Connect to social media &amp; challenge friends to <span className="text-warning fw-bold">#StoptheSpread19</span></p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* photo enthusiasts */}
      <Container fluid className="d-flex flex-column text-center text-white justify-content-center callout-jumbotron download-jumbotron">
        <h1 class="display-5">The largest community of photo enthusiasts</h1>
        <p><Button variant="info" href="/login" className="fs-3">Download the app</Button></p>
      </Container>

      {/* You're in good company */}
      <Container fluid className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h4>You're in good company</h4>
              <p>View the top ten photo entries for our <strong>#quarantinewithme</strong> challenge! This weeks theme is <strong>"Mask Up in Style"</strong></p>
              <Container fluid>
                <Row>
                  <Col>1 of 3</Col>
                  <Col>2 of 3</Col>
                  <Col>3 of 3</Col>
                </Row>
              </Container>
            </Col>
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div >
  )
}
export default Landing;