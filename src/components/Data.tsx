import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100%;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 400;
`

function Data() {
  return (
    <Wrapper>
        <Nav />
        <Title>Data</Title>
    </Wrapper>
  );
}

export default Data;