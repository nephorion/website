import React from 'react';
import Heading from '../components/Heading';
import {Col, Container, Image, Row} from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import SubHeading from "../components/SubHeading";

const name = "nephorion";

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col sm className="text-center">
                    <Image
                        src={`${process.env.PUBLIC_URL}/logo.png`}
                        style={{ width: '50%' }}
                        alt="logo image"
                    />
                </Col>
            </Row>

            <Row>
                <Col sm className="text-center">
                    <SubHeading name="Cloud Native. AI Augmented. Code Fluent. Human First."/>
                </Col>
            </Row>

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
