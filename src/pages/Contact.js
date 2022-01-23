import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import contact from '../assets/images/contact.jpeg';

const Contact = () => {
  return (
    <div>
      <div className="contact-header">
        <h1>Nous Contactez</h1>
        <p>Partagez votre requête et vos idées avec nous !</p>
      </div>
      <Row>
        <Col md={6}>
          <img className="d-block w-100" src={contact} alt="contact-img" />
        </Col>
        <Col md={6}>
          <FormContainer>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>
                  <i className="fas fa-user"></i> Nom:{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="Ecire son nom" />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>
                  <i className="fas fa-envelope-square"></i>  Adresse email
                </Form.Label>
                <Form.Control type="email" placeholder="Ecrire son email" />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>
                  <i className="fas fa-pen"></i> Message
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <br></br>
              <Button
                type="submit"
                variant="success"
                className="signin-btn"
                block
              >
                Envoyez
              </Button>
            </Form>
          </FormContainer>
        </Col>
      </Row>
      <Row>
        <Col className="contact-end">
          <h6>Address</h6>
          <p>
            Casablanca <br />
            2Mars 
          </p>
          
        </Col>
        <Col className="contact-end">
          <h6>Teléphone</h6>
          <p>+212707780784</p>
        </Col>
        <Col className="contact-end">
          {" "}
          <h6>Email</h6>
          <p>atbsjewerly@gmail.com</p>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
