import styled from "styled-components";

export const IconList = styled.div`
    display : flex;
    justify-content : space-between;
    // max-width : 150px;
    width : 160px;
`

export const Icon = styled.div`
    border-radius : 100px;
    background-color : aliceblue;
    width : 45px;
    height : 45px;
    overflow : hidden;
    display : flex;
    flex-direction : column;
    // display : block;
    font-size : 1rem;
    padding : 4px;
     svg {
        display : block;
        margin : auto;
        font-size : 1rem;
     }
`

export const ProfileAvator = styled(Icon)`
    padding : 0px;
    width : 45px;
    height : 45px;
    img {
        width : 100%;
    }
`