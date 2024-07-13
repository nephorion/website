import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const HeadingTitle = styled.h1`
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 10vw;
    max-font-size: 40em;
    transition: color 0.3s ease;
    &:hover {
        cursor: pointer;
        color: #EEEEEE;
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
