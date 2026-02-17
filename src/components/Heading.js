import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const HeadingTitle = styled.h1`
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    color: white;
    font-size: 10vw;
    max-font-size: 40em;
    letter-spacing: 0.05em;
    animation: neonPulse 4s ease-in-out infinite, fadeInUp 1s ease-out both;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        color: #00e5ff;
        text-shadow:
            0 0 15px rgba(0, 255, 255, 0.8),
            0 0 40px rgba(0, 255, 255, 0.5),
            0 0 80px rgba(0, 255, 255, 0.3);
    }
`;


const Heading = ({name}) => {
    const navigate = useNavigate();

    return (
        <HeadingTitle onClick={()=> navigate("/")}>
            {name}
        </HeadingTitle>
    )
};

export default Heading;
