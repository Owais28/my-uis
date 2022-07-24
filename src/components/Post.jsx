import React from "react";

// Styles
import {
  PostBody,
  PostHeader,
  PostInfo,
  PostInfoImg,
  PostInfoText,
  PostReactionIcon,
  PostWrapper,
  PostFooterAvator
} from "../styles/PostStyles";
import '../styles/post.css';

// Images
import postAuthorImg from "../images/profile.jpeg";
import PostImg from "../images/postImg.png";

// Icons
import { FiMoreVertical } from "react-icons/fi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoChatbubbleSharp, IoChatbubbleOutline, IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import {HiOutlineShare, HiShare} from 'react-icons/hi';
import { Icon, ProfileAvator } from "../styles/Icons";


export default function Post() {
  return (
    <PostWrapper className="post__wrapper">
      {/* Post Header */}
      <PostHeader className="post__header">
        <PostInfo className="post__header-postInfo">
          <PostInfoImg className="post__postInfo-img">
            <img src={postAuthorImg} alt="" />
          </PostInfoImg>
          <PostInfoText className="post__postInfo-text">
            <div className="post__postInfoText-author">Owais Athar</div>
            <div className="post__postInfoText-location">
              Maharashtra, India
            </div>
          </PostInfoText>
        </PostInfo>
        <div className="post__header-more">
          <FiMoreVertical />
        </div>
      </PostHeader>
      {/* Post Body or Actual Post  */}
      <PostBody className="post__body">
        <img src={PostImg} alt="" />
      </PostBody>

      {/* Post Footer wrapper */}
      <div className="post__footer">
        <div className="post__footer-options">
          <div className="post__options-reaction">
            <PostReactionIcon>
            <BsHeartFill className="post__reaction active"/>
            </PostReactionIcon>

            {/* <PostReactionIcon>
            <BsHeart className="post__reaction" />
            </PostReactionIcon> */}

            <PostReactionIcon>
            <IoChatbubbleOutline className="post__reaction"/>
            </PostReactionIcon>

            {/* <PostReactionIcon>
            <IoChatbubbleSharp className="post__reaction"/>
            </PostReactionIcon> */}

            {/* <PostReactionIcon>
            <HiShare className="post__reaction"/>
            </PostReactionIcon> */}

            <PostReactionIcon>
            <HiOutlineShare className="post__reaction"/>
            </PostReactionIcon>

          </div>
          <div className="post__options-save">
            <PostReactionIcon>

            <IoBookmarkOutline/>
            {/* <IoBookmark/> */}
            </PostReactionIcon>
          </div>
        </div>
        <div className="post__footer-postState">
            <div className="postState_icons">

            <PostFooterAvator>
                <img src={postAuthorImg} alt="" />
            </PostFooterAvator>

            <PostFooterAvator>
                <img src={postAuthorImg} alt="" />
            </PostFooterAvator>

            <PostFooterAvator>
                <img src={postAuthorImg} alt="" />
            </PostFooterAvator>
            </div>
            <div className="postState_des">
                liked by <b>lone34</b> and <b>1,434</b> others
            </div>
        </div>
        <div className="post__footer-desc">
            <span className="post__footer-author">Owais22</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati animi atque odio ut cupiditate soluta nobis ab vitae suscipit eveniet quibusdam id eos quod blanditiis, reprehenderit in velit ea ad?
        </div>
      </div>
    </PostWrapper>
  );
}
