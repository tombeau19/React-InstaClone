import React, {Component} from 'react';
import styled from 'styled-components'

const ProfilePic = styled.img`
display: flex;
border-radius: 50%;
width: 30px;
height: 30px
`

class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
      <div>
        <ProfilePic src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </div>
    );
  }
}

export default Comment;