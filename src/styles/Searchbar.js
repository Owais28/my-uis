import styled from "styled-components";

export const SearchBar = styled.div`
    padding : 0px 5px;
    background-color: aliceblue;
    border-radius : 100px;
    display : flex;
    flex : .5;
    svg {
        margin-right : 10px;
        font-size : 1rem;
        // height : 100%;
        display : block;
    }
    align-items : center;
    input {
        background-color : transparent;
        border: none;
        outline : none;
        width : 100%;
        font-size : 1rem;
    }


    @media screen and (max-width:414px) {
        display : none;
    }
`
