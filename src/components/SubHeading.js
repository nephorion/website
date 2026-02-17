import React from 'react';
import styled from "styled-components";

const SubHeadingTitle = styled.h2`
    font-family: "Fira Code", "Courier New", monospace;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    color: white;
    font-size: clamp(0px, 1.4vw, 5em);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    animation: neonPulse 4s ease-in-out infinite, fadeInUp 1s ease-out 0.3s both;
`;


const SubHeading = ({name}) => {
    return (
        <SubHeadingTitle>
            {name}
        </SubHeadingTitle>
    )
};

export default SubHeading;
