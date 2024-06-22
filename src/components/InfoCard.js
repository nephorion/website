import React from 'react';
import {Button, Card} from "react-bootstrap";

const InfoCard = ({img,title,text}) => (
    <Card className={"custom-card"}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text> {text}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default InfoCard;