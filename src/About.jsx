import React from "react"

import { Container, Row, Col } from "react-bootstrap"

function About() {
  return (
    <div>
      <Container fluid className="secondary-banner text-center text-white mb-5">
        <h1>About</h1>
      </Container>
      <Container className="py-5">

        <figure className="text-center">
          <blockquote className="blockquote">
            <p>"Young, healthy people are low on the priority list for the vaccine rollout. That means that modifying behavior now can save thousands of young lives next year."</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Rochelle P. Walensky, MD, MPH, nominated by <cite title="Source Title">President Joe Biden</cite> to be the next CDC director.
          </figcaption>
        </figure>
      </Container>

      {/* <Container fluid>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body
              
              
              ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
    </div>
  )
}
export default About;