import styled from "styled-components";

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
    height : 400px;
    border-radius : 10px;
    overflow : hidden;

    img {
        width : 100%;
        height : 100%;
        border-radius : inherit;
    }

`