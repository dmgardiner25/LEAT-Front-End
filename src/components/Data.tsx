import React from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100%;
`

function Data() {
  return (
    <Wrapper>
        <Nav />
        <Text variant={'xxLargePlus'}>Data</Text>
    </Wrapper>
  );
}

export default Data;