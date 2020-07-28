import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100px;
`

const Logo = styled.h1`
    font-size: 24px;
    font-weight: 400;
`

const Items = styled.div`
    display: flex;
    justfiy-content: center;
    margin-left: 100px;
`

const Item = styled(Link)`
    margin-right: 75px;    
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const ItemText = styled.p`
    font-weight: 200;
    color: #808080;
`

function Nav() {
  return (
    <Wrapper>
        <Logo>LEAT</Logo>
        <Items>
            <Item to='/'><ItemText>Home</ItemText></Item>
            <Item to='/data'><ItemText>Data</ItemText></Item>
            <Item to='/about'><ItemText>About</ItemText></Item>
        </Items>
    </Wrapper>
  );
}

export default Nav;