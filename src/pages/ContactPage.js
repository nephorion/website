import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";

const HomePage = () => {
    return (
        <Container>
            <PageHeader/>
            <Row>
                <Col sm className="text-center">
                    <ContactForm />
                </Col>
            </Row>

        </Container>
    );
}

export default HomePage;
