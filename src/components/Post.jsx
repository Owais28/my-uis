import React from 'react'

// Styles
import { PostBody, PostHeader, PostInfo, PostInfoImg, PostInfoText, PostWrapper } from '../styles/PostStyles'

// Images
import postAuthorImg from '../images/profile.jpeg';
import PostImg from '../images/postImg.png'

// Icons
import {FiMoreVertical} from 'react-icons/fi';

export default function Post() {
  return (
    <PostWrapper className='post__wrapper'>
        {/* Post Header */}
        <PostHeader className="post__header">
            <PostInfo className="post__header-postInfo">
                <PostInfoImg className="post__postInfo-img">
                    <img src={postAuthorImg} alt="" />
                </PostInfoImg>
                <PostInfoText className="post__postInfo-text">
                    <div className="post__postInfoText-author">
                        Owais Athar
                    </div>
                    <div className="post__postInfoText-location">
                        Maharashtra, India
                    </div>
                </PostInfoText>
            </PostInfo>
            <div className="post__header-more">
                <FiMoreVertical/>
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
ss
                </div>
                <div className="post__options-save">

                </div>
            </div>
            <div className="post__footer-postState">

            </div>
            <div className="post__footer-desc">

            </div>
        </div>
    </PostWrapper>
  )
}
