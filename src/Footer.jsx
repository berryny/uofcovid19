import React from "react"
import logo from './universe_of_covid_consciousness_logo.png';

import { Container, Row, Col } from "react-bootstrap"

function Footer() {
  return (
    <div className="footer bg-light py-5 mt-5">
        <Container className="text-center">
          <Row className="align-items-center">
            <Col md={2}><img
              width="100"
              src={logo}
              className="img-fluid d-inline-block align-top"
              alt="Universe of Covid Consciousness logo"
            /></Col>
            <Col><ul class="list-inline">
              <li class="list-inline-item"><a href="/#">Download App</a></li>
              <li class="list-inline-item"><a href="/#">Community</a></li>
              <li class="list-inline-item"><a href="/contact">Contact Us</a></li>
            </ul></Col>
            <Col>
            <p className="copy">Universe of Covid Consciousness <br/>&copy;2021 We love our users!</p>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
export default Footer;