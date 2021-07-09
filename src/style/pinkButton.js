import styled from "@emotion/styled";

export const MyButton = styled.a`
    position: relative;
    dsiplay: inline-block;
    cursor: pointer;
    outline: none;
    border: 1px solid hotpink;
    border-radius: 0.75em;
    background: pink;
    padding: 10px 10px;
    color: white;
    user-select: none;
    text-decotation: none;
    transition: trasnform 0.15s ease-out, background 0.15s ease-out;
    &::before {
        content: "";
    }
    &:hover {
        background: white;
        color: black;
    }
`;
