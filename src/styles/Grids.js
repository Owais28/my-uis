import styled from "styled-components";

export const MainGrid = styled.div`
    display : grid;
    grid-template-columns : .55fr 1fr .5fr;
    grid-gap : 1rem;
    // overflow : hidden;

    @media screen and (max-width : 414px){
        grid-template-columns  : 1fr;
    }
`