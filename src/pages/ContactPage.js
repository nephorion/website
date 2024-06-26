import React from 'react';
import Heading from '../components/Heading';
import {Col, Container, Row} from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const name = "nephorion";

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col sm className="text-center">
                    <Heading name={name}/>
                </Col>
            </Row>
            <Row>
                <Col sm className="text-center">
                    <ContactForm />
                </Col>
            </Row>

        </Container>
    );
}

export default HomePage;
