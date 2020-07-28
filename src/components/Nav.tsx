import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { initializeIcons, SearchBox, ISearchBoxStyles, Text } from '@fluentui/react';

initializeIcons();

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
`

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
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

const ItemText = styled(Text)`
    color: #808080;
`

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

function Nav() {
  return (
    <Wrapper>
        <ItemWrapper>
            <Text variant={'xxLarge'}>LEAT</Text>
            <Items>
                <Item to='/'><ItemText variant={'mediumPlus'}>Home</ItemText></Item>
                <Item to='/data'><ItemText variant={'mediumPlus'}>Data</ItemText></Item>
                <Item to='/about'><ItemText variant={'mediumPlus'}>About</ItemText></Item>
            </Items>
        </ItemWrapper>
        <SearchBox
            styles={ searchBoxStyles }
            placeholder="Search"
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