import styled from "@emotion/styled";

export const MenuList = styled.div`
    display: flex;
    align-items: center;
    background: pink;
    height: 70px;
    width: 100%;
    & ul {
        list-style: none;
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        & li {
            text-align: center;
            width: 20%;
            height: 20px;
        }
        & a {
            text-decoration: none;
            color: white;
            font-size: 13pt;
            font-weight: bold;
        }
        & a:hover {
            font-size: 14pt;
            color: black;
        }
    }
`;

export const Container = styled.div`
    text-align: center;
`;
