import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100%;
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
`

function Landing() {
  return (
    <Wrapper>
        <Nav />
        <Title>Law Enforcement Accountability Tracker</Title>
    </Wrapper>
  );
}

export default Landing;
