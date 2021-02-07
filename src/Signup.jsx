import React from "react"
import { Container, Button, Form, Row, Col, FormCheck } from "react-bootstrap"

function Signup() {
  return (
    <div>
      <Container fluid className="secondary-banner text-center text-white mb-5">
        <h1>Yay! You're officially registered. Here are a few questions to get your started:</h1>
      </Container>
      <Container className="py-5">
        <Form>
          <h2>How would you rate your knowledge of COVID-19(1-10)?</h2>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control size ="lg" as="select" custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
      <Container>
        <h2>Do you think COVID-19 is more contagious, less contagious, or about the same as the flu?</h2>
        <Row>
          <Col md={4}>
            <Button size = "lg" variant="danger" type="submit">More contagious</Button>{' '}
          </Col>
          <Col md={4}>
            <Button size = "lg" variant="danger" type="submit">Less contagious</Button>{' '}
          </Col>
          <Col md={4}>
            <Button size = "lg" variant="danger" type="submit"> About the same as the flu</Button>{' '}
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <h2>Which of these symptoms are common in cases of COVID-19?</h2>
        <h4>Select all that apply</h4>
        <Form className="mb-5">
            <Form.Check>
              <FormCheck.Input className= "checkbox-round"/>
              <FormCheck.Label className= "checkbox-label"> Dry cough </FormCheck.Label>
            </Form.Check>
            <Form.Check>
              <FormCheck.Input className= "checkbox-round"/>
              <FormCheck.Label className= "checkbox-label"> Easily bruised </FormCheck.Label>
            </Form.Check>
            <Form.Check>
              <FormCheck.Input className= "checkbox-round"/>
              <FormCheck.Label className= "checkbox-label"> Fever </FormCheck.Label>
            </Form.Check>
            <Form.Check>
              <FormCheck.Input className= "checkbox-round"/>
              <FormCheck.Label className= "checkbox-label"> Fatigue </FormCheck.Label>
            </Form.Check>
            <Form.Check>
              <FormCheck.Input className= "checkbox-round"/>
              <FormCheck.Label className= "checkbox-label"> Vision impairment</FormCheck.Label>
            </Form.Check>
            <Form.Check>
              <FormCheck.Input className= "checkbox-round"/>
              <FormCheck.Label className= "checkbox-label"> Loss of taste or smell</FormCheck.Label>
            </Form.Check>
        </Form>
        <Container align="center">
          <h3>Click here to finigh and join the Universe of COVID Consciousness</h3>
          <p><Button size= "lg" variant="danger" href="/profile" >Submit</Button></p>
        </Container>
      </Container>
    </div>)
}
export default Signup;