import React from "react";
import { BsHandThumbsDown, BsHeartFill } from "react-icons/bs";
import { CommonWrapper } from "../styles/Global";
import { Icon, ProfileAvator } from "../styles/Icons";


import profileURL from '../images/profile.jpeg';
import profileURL2 from '../images/profile2.jpeg';
import profileURL3 from '../images/profile3.jpeg';
import profileURL4 from '../images/profile4.jpeg';
import { HiHeart, HiOutlineUserAdd } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function Notification() {
  return (
    <CommonWrapper className="notification__wrapper">
      <div className="commonWrapper__top">
        <div className="commonWrapper__title">Notification</div>
        <div className="commonWrapper__option">See all</div>
      </div>
      <div className="notification__body">
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> started following you. <span className="time">4m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <HiOutlineUserAdd />
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL2} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>__s44ff</b> commented on your post. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <IoChatbubbleOutline />
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL3} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> started following your. <span className="time">6m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <HiOutlineUserAdd />
              </Icon>
            </div>
          </div>
        </div>
        
        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL4} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> liked your photo. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <BsHeartFill/>
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL2} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>__s44ff</b> commented on your post. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <IoChatbubbleOutline />
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL3} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> started following your. <span className="time">6m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <HiOutlineUserAdd />
              </Icon>
            </div>
          </div>
        </div>
        
        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL4} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> liked your photo. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <BsHeartFill/>
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL2} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>__s44ff</b> commented on your post. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <IoChatbubbleOutline />
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL3} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> started following your. <span className="time">6m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <HiOutlineUserAdd />
              </Icon>
            </div>
          </div>
        </div>
        
        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL4} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> liked your photo. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <BsHeartFill/>
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL2} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>__s44ff</b> commented on your post. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <IoChatbubbleOutline />
              </Icon>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL3} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> started following your. <span className="time">6m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <HiOutlineUserAdd />
              </Icon>
            </div>
          </div>
        </div>
        
        {/* Notification */}
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL4} alt="" />
              </ProfileAvator>
            </div>
            <div className="notification__text">
              <b>bo334</b> liked your photo. <span className="time">1m</span>
            </div>
          </div>

          <div className="notification__right">
            <div className="notification__illustration">
              <Icon className="notification__icon">
              <BsHeartFill/>
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
}
