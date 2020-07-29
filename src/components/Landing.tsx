import React from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100%;
`

function Landing() {
  return (
    <Wrapper>
        <Nav inData={false}/>
        <Text variant={'xxLargePlus'}>Law Enforcement Accountability Tracker</Text>
    </Wrapper>
  );
}

export default Landing;
