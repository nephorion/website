import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import {useNavigate} from "react-router-dom";

const Paragraph = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 1rem;
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
    animation: fadeInUp 1s ease-out 0.6s both;
`

const ButtonRow = styled(Row)`
    animation: fadeInUp 1s ease-out ${props => props.$delay || '0.9s'} both;
`

const NeonButton = styled.button`
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 255, 255, 0.4);
    color: rgba(0, 255, 255, 0.9);
    background: transparent;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.9rem;
    padding: 12px 28px;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 6px;
    text-decoration: none;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        border-color: rgba(0, 255, 255, 0.8);
        color: #00e5ff;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.1);
        transform: translateY(-2px);
    }

    &:hover::before {
        left: 100%;
    }
`

const NeonLink = styled.a`
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 255, 255, 0.4);
    color: rgba(0, 255, 255, 0.9);
    background: transparent;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.9rem;
    padding: 12px 28px;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 6px;
    text-decoration: none;
    text-align: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        border-color: rgba(0, 255, 255, 0.8);
        color: #00e5ff;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.1);
        transform: translateY(-2px);
        text-decoration: none;
    }

    &:hover::before {
        left: 100%;
    }
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
                        with the human experience at its core, bridging the divide
                        between cold silicon and warm flesh. This isn't just technology — it's
                        a revolution. Plug in, sync up, and let's create the future.
                    </Paragraph>
                </Col>
            </Row>

            <ButtonRow $delay="0.9s" className="mt-4">
                <NeonButton onClick={handleCatalogueClick}>
                    Catalogue
                </NeonButton>
            </ButtonRow>

            <ButtonRow $delay="1.1s" className="mt-3">
                <NeonLink
                    href="https://twitter.com/messages/compose?recipient_id=1814900427529592836"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DM us on X , and let's craft the extraordinary.
                </NeonLink>
            </ButtonRow>

            <ButtonRow $delay="1.3s" className="mt-3 mb-5">
                <NeonLink
                    href="https://discord.gg/qn9tRu5dax"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Join us on Discord and have a chat.
                </NeonLink>
            </ButtonRow>
        </Container>
    );
}

export default HomePage;
