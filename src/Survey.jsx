import React, { Component } from "react"
import axios from "axios";

import { Container, Form, Button } from "react-bootstrap"

let endpoint = "http://localhost:5000";


class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
    };
  }
  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  onSubmit = () => {
    let { fname, lname } = this.state;
    console.log("PRINTING this", this.state);
      axios
        .post(
          endpoint + "/checkin",
          {
            fname,
            lname
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
  };

  render() {
    return (
      <div id="survey"><Container>
        {/* <Form action="/test" method="POST"> */}
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="fname"
              // value={this.state.fname}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              Enter your first name
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text"
              placeholder="Last Name"
              name="lname"
              // value={this.state.lname}
              onChange={this.onChange} />
            <Form.Text className="text-muted">
              Enter your last name
    </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </Container>
      </div>
    )
  }
}
export default Survey;