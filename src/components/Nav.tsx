import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { initializeIcons, SearchBox, Text } from "@fluentui/react";

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

const Items = styled.div`
  display: flex;
  justfiy-content: center;
  margin-left: 100px;
`;

const Item = styled(Link)`
  margin-right: 75px;
  text-decoration: none;

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
        <Text variant={"xxLarge"}>LEAT</Text>
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
