import React from "react"
import logo from './logo.svg';
import { ListGroup, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

function NavigationBar() {
  return (
    <div>
      <Navbar bg="light justify-content-between" expand="lg">
        <Navbar.Brand href="/"><img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
            {/* <Nav.Link href="/register">Register</Nav.Link> */}
            <Nav.Link href="/survey">Survey</Nav.Link>
          </Nav>
          <ListGroup horizontal className="bg-light">
            <ListGroup.Item className="p-0"><Button variant="outline-danger" href="/login">Login</Button></ListGroup.Item>
            <ListGroup.Item className="p-0"><Button variant="danger" href="/register">Register</Button></ListGroup.Item>
          </ListGroup>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavigationBar;