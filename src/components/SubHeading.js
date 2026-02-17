import React from 'react';
import styled from "styled-components";

const SubHeadingTitle = styled.h2`
    font-family: "Fira Code", "Courier New", monospace;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    color: rgba(255, 255, 255, 0.75);
    font-size: 2vw;
    max-font-size: 5em;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    animation: subtleGlow 5s ease-in-out infinite, fadeInUp 1s ease-out 0.3s both;
`;


const SubHeading = ({name}) => {
    return (
        <SubHeadingTitle>
            {name}
        </SubHeadingTitle>
    )
};

export default SubHeading;
