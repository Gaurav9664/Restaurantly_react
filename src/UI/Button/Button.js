import React from 'react';
import { BasicButton } from './button.style';

function Button({ children }) {
    return (
        <BasicButton>
            {children}
        </BasicButton>
    );
}

export default Button;