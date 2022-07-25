import React from 'react'
import '../styles/message.css'
import profile from '../images/profile.jpeg'


// Styles
import { ProfileAvator } from '../styles/Icons'

export default function Message() {
  return (
    <div className="message__wrapper">
              <div className="notification__left">
                <div className="notification__avator">
                    <ProfileAvator>
                        <img src={profile} alt="profile" />
                    </ProfileAvator>
                </div>
                <div className="message__text">
                  <div className="author-name">
                    Owais 
                  </div>
                  <div className="author-lastActiveTime">
                    Active 2 min ago
                  </div>
                </div>
              </div>
            </div>
            )
}
