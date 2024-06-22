import React from 'react';
import Heading from './Heading';
import {Col, Container, Row} from "react-bootstrap";

const name = "nephorion";

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col sm className="text-center">
                    <Heading name={name}/>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
