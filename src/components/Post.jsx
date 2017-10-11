import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'

const EntirePage = styled.div`
  width: 45%
`

const EntirePost = styled.div`
  display: flex;
  max-width: 600px;
  height: auto;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
//THE BOX-SHADOW CODE WAS COPIED FROM THE EXAMPLE HERE:
//https://www.w3schools.com/css/css3_images.asp

const UserHeader = styled.div`
  display: flex;
  width: 600px;
  height: 60px
  flex-direction: row;
  justify-content: left;
  align-items: center
`
const UserName = styled.p`
  width: 102px;
  height: 18px
`
const ProfilePic = styled.img`
  display: flex;
  border-radius: 50%;
  width: 30px;
  height: 30px
`
const PostImage = styled.img`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 600px;
  object-fit: cover;
`

const LikeComment = styled.div`
  dipsplay: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 568px;
  height: 40px
`
const Likes = styled.p`
  dipslay: flex;
  justify-content: left;
  wight: 568px;
  heigth: 36px
`

class Post extends Component {

  render() {
    const { post } = this.props;
    return (
      <EntirePage>
        <EntirePost>
          <UserHeader>
            <ProfilePic src={post.user.profile_pic} alt={post.user.username} />
            <UserName>{post.user.username}</UserName>
          </UserHeader>
          <div>
            <PostImage src={post.image.url} />
          </div>
          <LikeComment>
            <FaHeartO />
            <FaCommentO />
          </LikeComment>
          <Likes>{post.likes.length} likes</Likes>
          <p>{post.caption}</p>
          {post.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
        </EntirePost>
        <br/><br/><br/>
      </EntirePage>
    )
  }
}

export default Post;