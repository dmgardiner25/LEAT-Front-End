import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { initializeIcons, SearchBox, Text } from "@fluentui/react";
import logo from "./../static/images/logo.png";

initializeIcons();

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Logo = styled.img`
margin-top: 10px;  
width: 50px;
`;

const Items = styled.div`
  display: flex;
  justfiy-content: center;
  margin-left: 100px;
`;

const Item = styled(Link)`
  margin-right: 75px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ItemText = styled(Text)`
  color: #808080;
`;

type props = {
  inData: boolean;
};

function Nav({ inData }: props) {
  var history = useHistory();

  return (
    <Wrapper>
      <ItemWrapper>
        <LogoLink to="/">
          <Logo src={logo} />
          <Text style={{ color: "black" }} variant={"xxLarge"}>
            LEAT
          </Text>
        </LogoLink>
        <Items>
          <Item to="/">
            <ItemText variant={"mediumPlus"}>Home</ItemText>
          </Item>
          <Item to="/data">
            <ItemText variant={"mediumPlus"}>Data</ItemText>
          </Item>
          <Item to="/about">
            <ItemText variant={"mediumPlus"}>About</ItemText>
          </Item>
        </Items>
      </ItemWrapper>
      <SearchBox
        styles={{
          root: { width: 200, visibility: inData ? "hidden" : "visible" },
        }}
        placeholder="Search"
        onSearch={(newValue) => history.push("/data/" + newValue)}
      />
    </Wrapper>
  );
}

export default Nav;
