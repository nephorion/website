import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import SubHeading from "./SubHeading";
import Heading from "./Heading";


const PageHeader = ({name}) => {
    return (
        <>
            <Row>
                <Col sm className="text-center">
                    <Image
                        src={`${process.env.PUBLIC_URL}/logo.png`}
                        style={{ width: '30%',marginBottom: '10%',marginTop: '5%' }}
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
                    <Heading name="nephorion"/>
                </Col>
            </Row>
        </>
)
};

export default PageHeader;
