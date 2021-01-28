import React from "react"

import { Container } from "react-bootstrap"

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

    </div>
  )
}
export default About;