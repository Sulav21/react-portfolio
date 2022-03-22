import React from "react";
import { Header } from "../Layout/Header";
import "./Hero.css";
import { Row, Col, Container } from "react-bootstrap";
import image from '../../assets/image.JPG'

export const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <Container>
      <Row className="mt-5 mb-3 pb-3">
        <Col md="7" className="ml-3 mb-3">
          <div >
            <div className="mb-3">Hi I'm Sulav Adhikari</div>
            <h2>👩‍💻Full-Stack MERN Developer !!!</h2>

            <p className="mt-5 mb-2">
              I am passionate software engineer who loves to solve problem through coding
            </p>

            <button className="btn btn-danger">
              Download Resume <i className="fas fa-cloud-download-alt"></i>
            </button>
          </div>
        </Col>
        <Col md ="5" className="text-center order-md-2">
          <img className="images" src={image} alt="" />
        </Col>
      </Row>
      </Container>
    </div>
  );
};
