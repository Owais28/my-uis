import styled from "styled-components";

export const MainGrid = styled.div`
    display : grid;
    grid-template-columns : calc(25%) calc(50% - 2rem) calc(25%);
    grid-gap : 1rem;
    overflow : hidden;
    width : 100%;
    // justify-content : space-between;

    @media screen and (max-width : 414px){
        grid-template-columns  : 1fr;
    }
`