import styled from "styled-components";

export const MainGrid = styled.div`
    display : grid;
    grid-template-columns : 1fr 2fr 1fr;

    @media screen and (max-width : 414px){
        grid-template-columns  : 1fr;
    }
`