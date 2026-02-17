import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    background: rgba(15, 25, 35, 0.7);
    border: 1px solid rgba(0, 255, 255, 0.1);
    border-radius: 16px;
    padding: 28px;
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: fadeInUp 0.8s ease-out ${props => props.$delay || '0s'} both;

    &:hover {
        border-color: rgba(0, 255, 255, 0.35);
        box-shadow:
            0 0 20px rgba(0, 255, 255, 0.1),
            0 8px 32px rgba(0, 0, 0, 0.3);
        transform: translateY(-6px);
    }
`

const CardTitle = styled.h3`
    font-family: "Orbitron", sans-serif;
    font-weight: 500;
    color: white;
    font-size: 1.3rem;
    margin-bottom: 8px;
    letter-spacing: 0.03em;
`

const CardSubtitle = styled.p`
    font-family: 'Fira Code', 'Courier New', monospace;
    color: rgba(0, 255, 255, 0.6);
    font-size: 0.85rem;
    margin-bottom: 16px;
`

const CardText = styled.p`
    font-family: 'Fira Code', 'Courier New', monospace;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 20px;
`

const CardButton = styled.button`
    float: right;
    border: 1px solid rgba(0, 255, 255, 0.4);
    color: rgba(0, 255, 255, 0.9);
    background: transparent;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.8rem;
    padding: 8px 20px;
    border-radius: 6px;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(0, 255, 255, 0.8);
        color: #00e5ff;
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.25);
        transform: translateY(-1px);
    }
`

const CatalogueCard = ({
    title,
    sub_title,
    text,
    cta,
    delay
}) => {
    return (
        <CardWrapper $delay={delay}>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{sub_title}</CardSubtitle>
            <CardText>{text}</CardText>
            <CardButton>{cta}</CardButton>
        </CardWrapper>
    )
}

export default CatalogueCard;
