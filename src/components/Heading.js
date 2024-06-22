import React from 'react';
import styled from "styled-components";

const HeadingTitle = styled.h1`
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 10vw;
    max-font-size: 40em;
`;

const Heading = ({name}) => (
    <HeadingTitle>
        {name}
    </HeadingTitle>
);

export default Heading;
