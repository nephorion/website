import React from 'react';
import Heading from '../components/Heading';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

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
                    <Link className={"navigation"} to={"about"}>
                        about
                    </Link>
                </Col>
                <Col sm className="text-center">
                    <Link className={"navigation"} to={"contact"}>
                        contact
                    </Link>
                </Col>
            </Row>

        </Container>
    );
}

export default HomePage;
