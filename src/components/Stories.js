import React from "react";
import profileURL from "../images/profile.jpeg";
import "../styles/stories.css";

export default function StorySection() {
  return (
// Stories Section
    <div className="stories__container">
        {/* Story wrapper box */}
      <div className="stories__story"> 
        <div className="stories__story-circle-gradient">
            <div className="stories__story-circle-white">
          <div className="stories__story-img">
            <img src={profileURL} alt="" />
          </div>
            </div>
        </div>
        <div className="stories__story-username">
            owais
        </div>
      </div>
      {/* Story wrapper box */}
      <div className="stories__story"> 
        <div className="stories__story-circle-gradient">
            <div className="stories__story-circle-white">
          <div className="stories__story-img">
            <img src={profileURL} alt="" />
          </div>
            </div>
        </div>
        <div className="stories__story-username">
            owais
        </div>
      </div>
      {/* Story wrapper box */}
      <div className="stories__story"> 
        <div className="stories__story-circle-gradient">
            <div className="stories__story-circle-white">
          <div className="stories__story-img">
            <img src={profileURL} alt="" />
          </div>
            </div>
        </div>
        <div className="stories__story-username">
            owais
        </div>
      </div>
      {/* Story wrapper box */}
      <div className="stories__story"> 
        <div className="stories__story-circle-gradient">
            <div className="stories__story-circle-white">
          <div className="stories__story-img">
            <img src={profileURL} alt="" />
          </div>
            </div>
        </div>
        <div className="stories__story-username">
            owais
        </div>
      </div>
    </div>
  );
}
