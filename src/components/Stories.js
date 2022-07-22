import React from 'react'
import profileURL from '../images/profile.jpeg'
import '../styles/stories.css'


export default function Stories() {


  return (
    <div className='stories__container'>
        <div className="stories__story">
            <div className="stories__story-img">
                <img src={profileURL} alt="" />
            </div>
            <div className="stories__story-username">
                __owais
            </div>
        </div>
        <div className="stories__story">
            <div className="stories__story-img">
                <img src={profileURL} alt="" />
            </div>
            <div className="stories__story-username">
                __owais
            </div>
        </div>
        <div className="stories__story">
            <div className="stories__story-img">
                <img src={profileURL} alt="" />
            </div>
            <div className="stories__story-username">
                __owais
            </div>
        </div>
    </div>

    )
}
