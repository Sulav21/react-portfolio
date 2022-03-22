import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../title/Title";
import image from '../../assets/image.JPG'

export const About = () => {
  return (
    <section id="about-me">
      <Title label="About Me" />
      <Container>
        <Row>
          <Col className="">
         <img src={image} alt="me" className="text-center" width="80%" />
          </Col>
          <Col>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quaerat sed eaque. Vitae accusamus magni esse quod sint consequatur a?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure ut molestias iste commodi voluptates id eveniet esse, numquam pariatur eum consequatur neque quia aut dolores culpa magni facere sequi accusamus quas. Explicabo sunt fugit voluptatem ipsum ipsa ipsam nesciunt!</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime deleniti alias commodi asperiores sequi optio architecto animi tenetur eveniet velit?
          </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
