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

const SocialRow = styled(Row)`
    animation: fadeInUp 1s ease-out ${props => props.$delay || '1.1s'} both;
    justify-content: center;
    gap: 24px;
`

const SocialIcon = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    text-decoration: none;

    svg {
        width: 32px;
        height: 32px;
        fill: currentColor;
    }

    &:hover {
        color: #ffffff;
        filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
        transform: translateY(-3px) scale(1.1);
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

            <SocialRow $delay="1.1s" className="mt-4 mb-5">
                <SocialIcon
                    href="https://twitter.com/messages/compose?recipient_id=1814900427529592836"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on X"
                >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </SocialIcon>
                <SocialIcon
                    href="https://discord.gg/qn9tRu5dax"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join us on Discord"
                >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                </SocialIcon>
            </SocialRow>
        </Container>
    );
}

export default HomePage;
