import React from "react"

import goodcommunity from './views/img/good-community.jpg';
import appleStore from './views/img/appleStore.png';
import googlePlay from './views/img/googlePlay.png';
import img1 from './views/img/good-community-2.jpg';
import stayingsafe from './views/img/keeping-each-other-safe.jpg';

import { Container, Button, Row, Col, Card, ListGroup } from "react-bootstrap"

function GoodToGo() {
    return (
      <div>
          <Container fluid className="secondary-banner text-center text-white mb-5">
            <h1>You're good to go!</h1>
          </Container>

          <Container fluid className="py-1">
            <Container>
              <Row>          
                <Col md={6}>
                  <Card className="border-0">
                    <Card.Img variant="top" src={stayingsafe}/>
                    <Card.Body>                                
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <h4>Would you like to share or upload a photo?</h4>
                  <Button variant="danger" href="/login">Upload Picture</Button>  
                </Col>
              </Row>
            </Container>cd 
          </Container>

        </div >
  )
}
export default GoodToGo;