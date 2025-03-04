import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import CatalogueCard from "../components/CatalogueCard";

const Paragraph = styled.p`
    color: white;
    font-family: 'Courier', sans-serif;
`

const HomePage = () => {
    return (
        <Container>
            <PageHeader/>

            <Row>
                <Col>
                    <CatalogueCard
                        title="AI Finance"
                        sub_title="Let our AI manage your finances"
                        text="This is so kewl. It does all of this for you without any hassl"
                        cta="Contact us now for a trial"
                    ></CatalogueCard>
                </Col>
                <Col>
                    <CatalogueCard
                        title="Stock Models"
                        sub_title="We ddevelop a stock picking strategy for you"
                        text="Lets do this. We build then model."
                        cta="Contact us now for a trial"
                    ></CatalogueCard>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <CatalogueCard
                        title="AI Finance"
                        sub_title="Let our AI manage your finances"
                        text="This is so kewl. It does all of this for you without any hassl"
                        cta="Contact us now for a trial"
                    ></CatalogueCard>
                </Col>
            </Row>

        </Container>
    );
}

export default HomePage;
