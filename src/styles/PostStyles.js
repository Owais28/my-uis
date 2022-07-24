import styled from "styled-components";
import { ProfileAvator } from "./Icons";

export const PostWrapper = styled.div`
    background-color : white;
    padding : 10px;
    border-radius : 10px;
    width : 100%;
    max-width : 100%;
`

export const PostHeader = styled.div`
    display : flex;
    justify-content : space-between;
    align-items: center;
    padding : 10px;
    margin-bottom : 10px;
`
export const PostInfo = styled.div`
display : flex;
align-items : center;
`

export const PostAvator = styled.div`
padding : 0px !important;
width : 50px;
height : 50px;

img {
    width : 100%;
    height : 100%;
    object-fit : cover;
}
`
export const PostInfoImg = styled.div`
padding : 0px !important;
width : 60px;
height : 60px;
border-radius : 100px;
overflow :
hidden;
img {
    width : 100%;
    height : 100%;
    object-fit : cover;
}
`

export const PostInfoText = styled.div`
    diplay : flex;
    flex-direction : column;
    margin-left : 15px;

    .post__postInfoText-author {
        font-size : .9rem;
        font-weight : 700;
    }

    .post__postInfoText-location {
        font-size : .7rem;
        color : #777;
    }
`

export const PostBody = styled.div`
    width : 100%;
    height : 350px;
    border-radius : 10px;
    overflow : hidden;

    img {
        width : 100%;
        height : 100%;
        border-radius : inherit;
        object-fit : cover;
    }

    margin-bottom : 10px;

`

export const PostFooterOptions = styled.div`
    display : flex;
    justify-content : space-between;
`

export const PostReactionIcon = styled.div`
border-radius : 100px;
// background-color : whitesmoke;
    width : 1.5rem;
    height : 1.5rem;
    overflow : hidden;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    font-weight : 500;
// display : block;
    // font-size : 1rem;
    color : black;
// padding : 4px;
    margin-right : 8px;
 svg {
    display : block;
    margin : auto;
    font-size : 1.1rem;
 }

    // &:hover {
    //     background-color : #8a2be230;
    // }
`

export const PostFooterAvator = styled.div`
    width : 40px;
    height :40px;
    // display : block;
    overflow : hidden;
    border-radius : 100px;
    border : 2px solid white;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
`