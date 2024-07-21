import React from 'react';
import {useNavigate} from "react-router-dom";
import {Image} from "react-bootstrap";
import styled from "styled-components";

const LogoDiv = styled.div`
    transition: color 0.3s ease;
    &:hover {
        cursor: pointer;
        color: #EEEEEE;
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
                    width: '30%',
                    marginBottom: '10%',
                }}
                alt="logo image"
            />
        </LogoDiv>
    )
};

export default Logo;
