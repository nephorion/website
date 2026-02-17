import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import CatalogueCard from "../components/CatalogueCard";

const CardRow = styled(Row)`
    margin-bottom: 24px;
`

const CataloguePage = () => {
    return (
        <Container>
            <PageHeader/>

            <CardRow>
                <Col>
                    <CatalogueCard
                        title="AI Finance"
                        sub_title="Let our AI manage your finances"
                        text="This is so kewl. It does all of this for you without any hassl"
                        cta="Contact us now for a trial"
                        delay="0.4s"
                    ></CatalogueCard>
                </Col>
                <Col>
                    <CatalogueCard
                        title="Stock Models"
                        sub_title="We develop a stock picking strategy for you"
                        text="Lets do this. We build the model."
                        cta="Contact us now for a trial"
                        delay="0.6s"
                    ></CatalogueCard>
                </Col>
            </CardRow>

            <CardRow className="mb-5">
                <Col>
                    <CatalogueCard
                        title="AI Finance"
                        sub_title="Let our AI manage your finances"
                        text="This is so kewl. It does all of this for you without any hassl"
                        cta="Contact us now for a trial"
                        delay="0.8s"
                    ></CatalogueCard>
                </Col>
            </CardRow>

        </Container>
    );
}

export default CataloguePage;
