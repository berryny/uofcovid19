import React from "react"
import { Container, Button } from "react-bootstrap"

function RegAccount() {
  return (
    <div>
      <Container fluid className="secondary-banner text-center text-white mb-5">
        <h1>Sign up for a free account</h1>
      </Container>
      <Container className="py-5">
        <form>
          <div className="mb-3">
            <div className="mb-3">
              <label for="firstName" className="form-label">First Name</label>
              <input type="firstname" className="form-control" id="uofccfirstname" />
            </div>
            <div className="mb-3">
              <label for="lastName" className="form-label">Last name</label>
              <input type="lastname" className="form-control" id="uofcclastname" />
            </div>
            <label for="uofccInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="uofccInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="uofccInputPassword1" className="form-label">Create password</label>
            <input type="password" className="form-control" id="uofccInputPassword1" />
          </div>
          <div className="mb-3">
            <label for="uofccconfirmPassword1" className="form-label">Confirm password</label>
            <input type="confirmpassword" className="form-control" id="uofccconfirmPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="uofccCheck1" />
            <label className="form-check-label" for="uofccCheck1">Check me out</label>
          </div>
          <Button variant="outline-danger" href="/" type="submit">Register</Button>
        </form>
      </Container>
    </div>)
}
export default RegAccount;