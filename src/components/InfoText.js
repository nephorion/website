import React from 'react';

const InfoText = ({paragraphs}) => (
    <>
        {
            paragraphs.map((text,i) => {
                return (
                    <p key={i} className={"courier-white"}>{text}</p>
                )
            })
        }
    </>
);

export default InfoText;
