import { styled } from "styled-components";

export const BasicButton = styled.button`
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    transition: 0.3s;
    line-height: 1;
    color: white;
    border: 2px solid #cda45e;
    background: none;

    &:hover {
        background: yellow;
    }

`