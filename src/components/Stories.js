import React, { useState } from "react";
import profileURL from "../images/profile.jpeg";
import "../styles/stories.css";

// Icons
import {BsPlusCircleFill} from 'react-icons/bs'

export default function StorySection() {

  const [admin, setAdmin] = useState(true);
  let addStoryButton = null;
  if(admin) addStoryButton = <div className="stories__addStory-button">
    <BsPlusCircleFill/>
  </div>

  return (
// Stories Section
    <div className="stories__container">
        {/* Story wrapper box */}
      <div className="stories__story seen"> 
        <div className="stories__story-circle-gradient">
            <div className="stories__story-circle-white">
              <div className="stories__story-img">
                <img src={profileURL} alt="" />
              </div>
        {addStoryButton}
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
