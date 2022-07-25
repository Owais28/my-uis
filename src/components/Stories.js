import React, { useState } from "react";
import "../styles/stories.css";

import profileURL from "../images/profile.jpeg";
import profileURL1 from "../images/profile2.jpeg";
import profileURL2 from "../images/profile3.jpeg";
import profileURL3 from "../images/profile4.jpeg";
// import profileURL4 from "../images/profile5.jpeg";


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
            <img src={profileURL1} alt="" />
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
            <img src={profileURL2} alt="" />
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
            <img src={profileURL3} alt="" />
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
            <img src={profileURL2} alt="" />
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
            <img src={profileURL3} alt="" />
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
            <img src={profileURL1} alt="" />
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
            <img src={profileURL1} alt="" />
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
            <img src={profileURL2} alt="" />
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
            <img src={profileURL2} alt="" />
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
            <img src={profileURL3} alt="" />
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
