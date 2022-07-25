import React from "react";
import { BsChatRightDots, BsSearch } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CommonWrapper } from "../styles/Global";
import { Icon, ProfileAvator } from "../styles/Icons";
import { SearchBar } from "../styles/Searchbar";

// import { Swiper, SwiperSlide, } from "swiper/react";
// import { Pagination } from "swiper";
import Swiper from "swiper";
import "../styles/message.css";
import "swiper/css";
// import  '../styles/notification.css'

import Message from "./Message";

import profile from "../images/profile.jpeg";

export default function MessageSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  var menu = ["Slide 1", "Slide 2", "Slide 3"];
  var mySwiper = new Swiper(".swiper-container", {
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <CommonWrapper className="notification__wrapper">
      <div className="commonWrapper__top">
        <div className="commonWrapper__title">Messages</div>
        <div className="commonWrapper__icon">
          {/* <Icon> */}
          <BsChatRightDots />
          {/* </Icon> */}
        </div>
      </div>
      <div className="messages__search">
        <SearchBar>
          <Icon>
            <FiSearch className="messages__search-icon" />
          </Icon>
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search messages..."
          />
        </SearchBar>
      </div>
      <div className="message__body"></div>
      {/* <div className="message">
          <div className="notification__left">
          <div className="notification__avator">
          <ProfileAvator>
          <img src={profileURL} alt="" />
          </ProfileAvator>
          </div>
            <div className="notification__text">
            <b>bo334</b> started following you.{" "}
            
            <span className="time">4m</span>
            </div>
            </div>

            <div className="notification__right">
            <div className="notification__illustration">
            <Icon className="notification__icon">
            <HiOutlineUserAdd />
            </Icon>
            </div>
          </div>
        </div> */}
      <div class="swiper-container">
        {/* <!-- Additional required wrapper --> */}
        <div class="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div class="swiper-slide" id="message__primary">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <div class="swiper-slide" id="message__secondary"></div>
          <div class="swiper-slide" id="message__request"></div>
        </div>
        {/* <!-- If we need pagination --> */}
        <div class="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        {/* <div class="swiper-pagination"> */}
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </CommonWrapper>
  );
}
