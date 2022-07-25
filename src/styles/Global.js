import styled from "styled-components";
import { PostWrapper } from "./PostStyles";

export const CommonWrapper = styled.div`
background-color : white;
padding :0 25px 25px 25px;
border-radius : 10px;
width : 100%;
max-width : 100%;
font-size : .7rem;
color: rgb(33, 33, 33);
overflow-x: hidden;
max-width : 100%;
max-height : 450px;


    .commonWrapper__top {
        display : flex;
        padding-top : calc(10px + 25px);
        padding-bottom : 10px;
        justify-content : space-between;
        align-items : center;
        border-bottom : 1px solid whitesmoke;
        position : sticky;
        top : 0;
        background-color : white;
        z-index : 1000;
    }

    .commonWrapper__title {
        font-weight : 700;
        font-size : .9rem;
    }

    .commonWrapper__option {
        color : #777;
    }

    .notification__body {
        padding-top : 10px;
    }

    .notification {
        padding-top : 8px;
        padding-bottom : 8px;
        display : flex;
        align-items : center;
        justify-content : space-between;
    }

    .notification__left {
        display : flex;
        align-items : center;
        padding-right : 8px;
    }

    .notification__avator {
        margin-right : 10px;
    }

    .notification__text .time {
        color : #777;
        font-size : .7rem;
    }

    .notification__icon {
       color : blueviolet;
       background-color : rgb(246, 239, 252); 
    }

    .commonWrapper__icon {
        border-radius : 100px;
    // background-color : aliceblue;
    width : 45px;
    height : 45px;
    overflow : hidden;
    display : flex;
    flex-direction : column;
    // display : block;
    font-size : 1rem;
    // padding : 4px;
     svg {
        display : block;
        margin : auto;
        font-size : 1.1rem;
        font-weight : 700;
     };    
    }

`