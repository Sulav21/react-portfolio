import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../title/Title'

export const Skills = () => {
  return (
    <section id="skills">
       <Container>
           <Row>
               <Col>
               <Title label="Skills"/>
               <div class="skill-list mb-5 d-flex justify-content-between text-center fs-1 fw-bold">
					<span> <i class="fab fa-html5 text-primary d-block"></i> HTML5 </span>
					<span> <i class="fab fa-css3-alt text-danger d-block"></i> CSS3 </span>
					<span><i class="fab fa-js-square text-warning d-block"></i> JAVASCRIPT</span>
          <span><i class="fab fa-react text-primary d-block"></i> REACT</span>
          
				</div>
               </Col>
           </Row>
       </Container>
    </section>
  )
}
