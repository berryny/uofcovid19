import React, { Component } from "react"
import axios from "axios";

import { Container, Form, Button } from "react-bootstrap"

let endpoint = "http://localhost:5000";


class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      items: [],
    };
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    let { task } = this.state;
    console.log("PRINTING task", this.state.task);
    console.log('endpoint', endpoint);
    // if (task) {
    axios
      .post(
        endpoint + "/test",
        {
          task,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        // this.getTask();
        this.setState({
          task: "",
        });
        console.log(res);
      });
    // }
  };

  render() {
    return (
      <div id="survey"><Container>
        {/* <Form action="/test" method="POST"> */}
        <Form onSubmit={this.onSubmit} method="POST">
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="task"
              value={this.state.task}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              Enter your first name
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>List Name</Form.Label>
            <Form.Control type="text"
              placeholder="Last Name"
              name="lname"
              value={this.state.lname}
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