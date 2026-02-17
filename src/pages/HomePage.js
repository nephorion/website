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
                        Made for humans.
                    </Paragraph>
                    <Paragraph>
                        Enhanced by AI.
                    </Paragraph>
                    <Paragraph>
                        Engineered with passion.
                    </Paragraph>
                    <Paragraph>
                        Designed to evolve.
                    </Paragraph>
                </Col>
            </Row>

            <ButtonRow $delay="0.9s" className="mt-4">
                <NeonButton onClick={handleCatalogueClick}>
                    Catalogue
                </NeonButton>
            </ButtonRow>

        </Container>
    );
}

export default HomePage;
