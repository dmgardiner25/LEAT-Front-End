import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBox, ISearchBoxStyles } from 'office-ui-fabric-react/lib/SearchBox';

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
    justify-content: center;
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

const searchBoxStyles = { root: { 
    display: 'flex',
    width: 200,
    float: 'right' 
} };

function Nav() {
  return (
    <Wrapper>
        <Logo>LEAT</Logo>
        <Items>
            <Item to='/'><ItemText>Home</ItemText></Item>
            <Item to='/data'><ItemText>Data</ItemText></Item>
            <Item to='/about'><ItemText>About</ItemText></Item>
        </Items>
        <SearchBox
            styles={searchBoxStyles}
            placeholder="Search"
            onEscape={ev => {
            console.log('Custom onEscape Called');
            }}
            onClear={ev => {
            console.log('Custom onClear Called');
            }}
            onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
            onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
        />
    </Wrapper>
  );
}

export default Nav;