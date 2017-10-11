import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1010px;
  height: 77px;
  align-items: center
`

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 176px;
  height: 35px;
  font-size: 24px
`

const Search = styled.div`
  display: flex;
  width: 215px;
  height: 28px;
  align-items: center
`

const Links = styled.div`
  display: flex;
  width: 156px;
  height: 24px;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
`
class Navbar extends Component {
  render() {
    return (
      <div>
        <TopBar>
          <Header>
            <Logo>
              <FaInstagram />|  Instaclone
          </Logo>
            <Search>
              <FaSearch /><input type="text" />
            </Search>
            <Links>
              <FaCompass />
              <FaHeartO />
              <FaUser />
            </Links>
          </Header>
        </TopBar>
        <br /><br /><br /><br />
      </div>
    );
  }
}

export default Navbar