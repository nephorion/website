import React from 'react';
import {useNavigate} from "react-router-dom";
import {Image} from "react-bootstrap";
import styled from "styled-components";

const LogoDiv = styled.div`
    animation: fadeIn 1s ease-out both;
    transition: all 0.4s ease;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 12px rgba(0, 255, 255, 0.5))
                drop-shadow(0 0 30px rgba(0, 255, 255, 0.2));
        transform: scale(1.05);
    }
`;


const Logo= () => {
    const navigate = useNavigate();

    return (
        <LogoDiv>
            <Image
                onClick={()=> navigate("/")}
                src={`${process.env.PUBLIC_URL}/logo.png`}
                style={{
                    width: '80%',
                    marginBottom: '-10%',
                    marginTop: '-20%',
                }}
                alt="logo image"
            />
        </LogoDiv>
    )
};

export default Logo;
