import React from 'react';
import { Headind1, Headind2, Headind3, Headind4, Headind5, Headind6, Paragraph } from './heading.style';

function Heading({children, type }) {

    const checktype = () => {
        switch (type) {
            case 'h1':
                return Headind1;
            case 'h2':
                return Headind2;
            case 'h3':
                return Headind3;
            case 'h4':
                return Headind4;
            case 'h5':
                return Headind5;
            case 'h6':
                return Headind6;
            case 'p':
                return Paragraph;
            default:
                return Paragraph;
        }
    }

    const TypeHeading = checktype();


    return (
        <TypeHeading>{children}</TypeHeading>
    );
}

export default Heading;