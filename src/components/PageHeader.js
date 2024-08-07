import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
import Logo from "./Logo";


const PageHeader = ({name}) => {
    return (
        <>
            <Row>
                <Col sm className="text-center">
                    <Logo/>
                </Col>
            </Row>

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
        </>
)
};

export default PageHeader;
