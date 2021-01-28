import React from "react"
import { Container, Button } from "react-bootstrap"

function Login() {
  return (
    <div>
      <Container fluid className="secondary-banner text-center text-white mb-5">
        <h1>Login</h1>
      </Container>
      <Container className="py-5">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <Button variant="danger" href="/survey">Login</Button>
        </form>
      </Container>
    </div>)
}
export default Login; 