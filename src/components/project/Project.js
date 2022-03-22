import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../title/Title";
import image from '../../assets/image.JPG' 

export const Project = () => {
  return (
    <section id="projects"className="project-section mb-3">
      <Container>
        <Row>
          <Col>
            <Title label="Projects" />
          </Col>
        </Row>

        {/* Project 1 */}
        <Row className="mt py-5">
          <Col md="6" className="order-md-2">
              <img src={image} alt="project" width="100%" className="img-thumbnail"/>
          </Col>
          <Col md="6">
              <h2>My PortFolio Website</h2>
              <div className="links">
                  <a href="#sent_to_github"><i className="fab fa-github"></i></a>
                  <a href="#sent_to_liveProject"><i className="fab fa-chrome"></i></a>
              </div>
              <p>Tech : HTML, CSS, JavaScript</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime, facilis, vel consectetur maiores fugit eaque, laboriosam obcaecati sapiente corporis distinctio nemo doloremque dignissimos impedit asperiores perferendis at quis</p>

          </Col>
        </Row>

        {/* Project 2*/}
        <Row className="mt py-5">
          <Col md="6" className="">
              <img src={image} alt="project" width="100%" className="img-thumbnail"/>
          </Col>
          <Col md="6">
              <h2>My PortFolio Website</h2>
              <div className="links">
                  <a href="#sent_to_github"><i class="fab fa-github"></i></a>
                  <a href="#sent_to_liveProject"><i class="fab fa-chrome"></i></a>
              </div>
              <p>Tech : HTML, CSS, JavaScript</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime, facilis, vel consectetur maiores fugit eaque, laboriosam obcaecati sapiente corporis distinctio nemo doloremque dignissimos impedit asperiores perferendis at quis</p>

          </Col>
        </Row>
        {/* Project 3*/}
        <Row className="mt py-2 ">
          <Col md="6" className="order-md-2">
              <img src={image} alt="project" width="100%" className="img-thumbnail"/>
          </Col>
          <Col md="6">
              <h2>My PortFolio Website</h2>
              <div className="links">
                  <a href="#sent_to_github"><i class="fab fa-github"></i></a>
                  <a href="#sent_to_liveProject"><i class="fab fa-chrome"></i></a>
              </div>
              <p>Tech : HTML, CSS, JavaScript</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime, facilis, vel consectetur maiores fugit eaque, laboriosam obcaecati sapiente corporis distinctio nemo doloremque dignissimos impedit asperiores perferendis at quis</p>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
