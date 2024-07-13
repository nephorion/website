import React from 'react';
import Heading from '../components/Heading';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";
import SubHeading from "../components/SubHeading";

const Paragraph = styled.p`
    color: white;
    font-family: 'Courier', sans-serif;
`

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col sm className="text-center">
                    <SubHeading name="Cloud Native. AI Augmented. Code Fluent. Human First."/>
                </Col>
            </Row>

            <Row>
                <Col sm className="text-center">
                    <Heading name="nephorion"/>
                </Col>
            </Row>


            <Row>d
                <Col sm className="text-center">
                    <Paragraph>
                        In the neon-drenched corridors of the digital sprawl,
                        we fuse the relentless power of cloud architecture with
                        the ethereal whispers of AI, sculpting code that's both
                        elegant and beautiful. Every line, every function is designed
                        with the human experience at it's core, bridging the divide
                        between cold silicon and warm flesh. This isn't just technology — it's
                        a revolution. Plug in, sync up, and let’s create the future.
                        <Link to={"/contact"}>Hit us up</Link>, and let's craft the extraordinary.
                    </Paragraph>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
