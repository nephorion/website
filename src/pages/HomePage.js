import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import {useNavigate} from "react-router-dom";

const Paragraph = styled.p`
    color: white;
    font-family: 'Courier', sans-serif;
`

const HomePage = () => {
    const navigate = useNavigate();

    const handleCatalogueClick = () => {
        navigate('/catalogue');
    };

    return (
        <Container>
            <PageHeader/>
            <Row>
                <Col sm className="text-center">
                    <Paragraph>
                        In the neon-drenched corridors of the digital sprawl,
                        we fuse the relentless power of cloud architecture with
                        the ethereal whispers of AI, sculpting code that's both
                        elegant and beautiful. Every line, every function is designed
                        with the human experience at it's core, bridging the divide
                        between cold silicon and warm flesh. This isn't just technology — it's
                        a revolution. Plug in, sync up, and let’s create the future.
                    </Paragraph>
                </Col>
            </Row>

            <Row>
                <Button
                    variant="outline-info"
                    onClick={handleCatalogueClick}
                >
                    Catalogue
                </Button>

            </Row>

            <br/>
            <Row>
                <Button
                    href="https://twitter.com/messages/compose?recipient_id=1814900427529592836"
                    variant="outline-info"
                    target="_blank"
                >
                    DM us on X , and let's craft the extraordinary.
                </Button>
            </Row>
            <br/>
            <Row>

                <Button
                    href="https://discord.gg/qn9tRu5dax"
                    variant="outline-info"
                    target="_blank"
                >
                    Join us on Discord and have a chat.
                </Button>
            </Row>
        </Container>
    );
}

export default HomePage;
