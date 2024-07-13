import React from 'react';
import styled from "styled-components";

const SubHeadingTitle = styled.h1`
    font-family: "Courier", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 2vw;
    max-font-size: 5em;
`;


const SubHeading = ({name}) => {
    return (
        <SubHeadingTitle>
            {name}
        </SubHeadingTitle>
    )
};

export default SubHeading;
