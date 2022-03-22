import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Contact = () => {
  return (
    <section id="contact" className='mt-4 py-2'>
        <Container>
            <Row>
                <Col className="d-flex justify-content-around fs-1">
                <a target="_blank" href="mailto:abc@gmail.com">
							<i className="fas fa-envelope text-warning"></i>
						</a>
						<a target="_blank" href=""><i className="fab fa-linkedin text-warning"></i></a>
						<a target="_blank" href=""><i className="fab fa-facebook-square text-warning"></i></a>
						<a target="_blank"href=""><i className="fab fa-youtube text-warning"></i></a>
                </Col>
            </Row>
        </Container>

    </section>
  )
}
