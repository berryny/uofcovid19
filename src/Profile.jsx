import React from "react"

import frontprofilepic from './views/img/front-profile-pic.png';

import { Container, Row, Col, Card } from "react-bootstrap"

function Profile() {
  return (
    <div>
         <Container fluid className="py-1">
            <Container>
              <Row>          
                <Col md={6}>
                  <Card className="border-0">
                    <Card.Img variant="top" src={frontprofilepic}/>
                    <Card.Body>                                
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <h1>Welcome, Brenda!</h1>             
                  <Row>
                    <Col>First Name: Brenda     
                    </Col>                      
                    <Col>Last Name: Brown</Col>
                    {/* <Col><img className="img-fluid"
                      src={img1}
                      alt="placeholder 3" /></Col> */}
                  </Row>
                  <Row><Col>Organizational Name: University of LA</Col></Row>
                      
                  <Row><Col>Total Number of submissions: 14</Col></Row>
                </Col>
              </Row>
            </Container>
          </Container>

  
    </div>
  )
}
export default Profile;
