import styled from "styled-components";

export const IconList = styled.div`
    display : flex;
    justify-content : space-between;
    max-width : 150px;
    width : 150px;
`

export const Icon = styled.div`
    border-radius : 100px;
    background-color : whitesmoke;
    width : 40px;
    height : 40px;
    overflow : hidden;
    display : flex;
    flex-direction : column;
    // display : block;
    font-size : 1rem;
     svg {
        display : block;
        margin : auto;
     }
`

export const ProfileAvator = styled(Icon)`
    padding : 0px;
    width : 40px;
    height : 40px;
    img {
        width : 100%;
    }
`