import React from "react"

import goodcommunity from './views/img/good-community.jpg';
import appleStore from './views/img/appleStore.png';
import googlePlay from './views/img/googlePlay.png';
import img1 from './views/img/good-community-2.jpg';

import { Container, Button, Row, Col, Card, ListGroup } from "react-bootstrap"

function Landing() {
  return (
    <div>
      {/* hero callout */}
      <Container fluid className="d-flex flex-column text-white justify-content-center callout-jumbotron home-jumbotron">
        <h1 class="display-3">I take COVID seriously!</h1>
        <h2 class="display-5 mt-3">I vow to do my part to <span className="text-warning fw-bold">#StoptheSpread19</span></h2>
        <p><Button variant="danger" href="/login" className="fs-3">Join Today</Button></p>
      </Container>

      {/* how it works */}
      <Container className="text-dark">
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
              <Button variant="danger" href="/register">Register</Button>
            </Col>
            <Col md={3}>
              <p><i class="fas fa-user-alt fa-4x"></i></p>
              <h4>Login</h4>
              <p>To get caught back up!</p>
              <Button variant="danger" href="/login">Login</Button>
            </Col>
            <Col md={3}>
              <p><i class="fas fa-check-circle fa-4x"></i></p>
              <h4>Check-in</h4>
              <p>Screen Questions by category to complete the COVID check-in</p>
              <Button variant="danger" href="/login">Complete Checklist</Button>
            </Col>
            <Col md={3}>
              <p><i class="fas fa-comments fa-4x"></i></p>
              <h4>Challenge the Community</h4>
              <p>Connect to social media &amp; challenge friends to <span className="text-info"><b>#StoptheSpread19</b></span></p>
              <Button variant="danger" href="/login">Join Challenge</Button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* photo enthusiasts */}
      <Container fluid className="d-flex flex-column text-center text-white justify-content-center callout-jumbotron download-jumbotron">
        <h6>Download the app</h6>
        <h1 class="display-5">The largest community of photo enthusiasts</h1>
        <ListGroup horizontal className="text-center mx-auto">
          <ListGroup.Item className="p-0 bg-transparent border-0">
            <a href="/#"><img className="img-fluid"
              src={appleStore}
              alt="placeholder 1" /></a></ListGroup.Item>
          <ListGroup.Item className="p-0 bg-transparent border-0">
            <a href="/#"><img className="img-fluid"
              src={googlePlay}
              alt="placeholder 1" /></a></ListGroup.Item>
        </ListGroup>
      </Container>

      {/* You're in good company */}
      <Container fluid className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h4>You're in good company</h4>
              <p>View the top ten photo entries for our <strong>#quarantinewithme</strong> challenge! This weeks theme is <strong>"Mask Up in Style"</strong></p>
              <Container fluid>
                <Row>
                  <Col><img className="img-fluid"
                    src={img1}
                    alt="placeholder 1" /></Col>
                  <Col><img className="img-fluid"
                    src={img1}
                    alt="placeholder 2" /></Col>
                  <Col><img className="img-fluid"
                    src={img1}
                    alt="placeholder 3" /></Col>
                </Row>
              </Container>
            </Col>
            <Col md={6}>
              <Card className="border-0">
                <Card.Img variant="top" src={goodcommunity} />
                <Card.Body>
                  <Card.Title>Quarantine Photo Challenge</Card.Title>
                  <Card.Text>The top 5 users who post pictures and receive the highest number of likes over a 7-day period will be featured on the UofCC instagram page. Make sure to submit photographs with your IG handle that you want tagged. One upload per day maximum. Must be 13 years of age or older to enter.</Card.Text>
                  <Button variant="danger" href="/login">Join the Community</Button>
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