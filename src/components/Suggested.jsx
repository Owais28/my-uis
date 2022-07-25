import React from 'react'
import { CommonWrapper } from '../styles/Global'
import { Icon, ProfileAvator } from '../styles/Icons'

import { HiOutlineUserAdd } from 'react-icons/hi'

import profileURL from '../images/profile.jpeg'
import profileURL2 from '../images/profile2.jpeg'
import profileURL3 from '../images/profile3.jpeg'
import profileURL4 from '../images/profile4.jpeg'


export default function Suggested() {
  return (
    <CommonWrapper className='mr-t-3'>
        <div className="commonWrapper__top">
        <div className="commonWrapper__title">Suggested</div>
        <div className="commonWrapper__option">See all</div>
      </div>
      <div className="notification__body">
        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL2} alt="" />
              </ProfileAvator>
            </div>
            <div className="message__text">
                  <div className="author-name">
                    ksdb92
                  </div>
                  <div className="author-lastActiveTime">
                    Followed by inc3@n__
                  </div>
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

        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL3} alt="" />
              </ProfileAvator>
            </div>
            <div className="message__text">
                  <div className="author-name">
                    ksdb92
                  </div>
                  <div className="author-lastActiveTime">
                    Followed by in,53n__
                  </div>
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

        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL4} alt="" />
              </ProfileAvator>
            </div>
            <div className="message__text">
                  <div className="author-name">
                    ksdb92
                  </div>
                  <div className="author-lastActiveTime">
                    Followed by iv56@n__
                  </div>
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

        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL} alt="" />
              </ProfileAvator>
            </div>
            <div className="message__text">
                  <div className="author-name">
                    ksdb92
                  </div>
                  <div className="author-lastActiveTime">
                    Followed by vj4__434
                  </div>
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

        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL2} alt="" />
              </ProfileAvator>
            </div>
            <div className="message__text">
                  <div className="author-name">
                    ksdb92
                  </div>
                  <div className="author-lastActiveTime">
                    Followed by inc3@n__
                  </div>
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

        <div className="notification">
          <div className="notification__left">
            <div className="notification__avator">
              <ProfileAvator>
                <img src={profileURL4} alt="" />
              </ProfileAvator>
            </div>
            <div className="message__text">
                  <div className="author-name">
                    ksdb92
                  </div>
                  <div className="author-lastActiveTime">
                    Followed by inc3@n__
                  </div>
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
    </div>
        </CommonWrapper>
  )
}
