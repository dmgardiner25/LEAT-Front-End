import React, {useState} from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100%;
`

const dashboardStyle = {
  height: '70vh'
}

function Landing() {

  return (
    <Wrapper>
        <Nav inData={false}/>
        <Text variant={'xxLargePlus'}>Law Enforcement Accountability Tracker</Text>
        <br/>
        <br/>
        <div style={dashboardStyle}>
          <iframe width='100%' height='100%' src='https://msit.powerbi.com/reportEmbed?reportId=542a499b-0e2c-4e73-b7fa-3efe8080b373&autoAuth=true&ctid=72f988bf-86f1-41af-91ab-2d7cd011db47&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9kZi1tc2l0LXNjdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D' allowFullScreen={true} ></iframe>
        </div>
    </Wrapper>
  );
}

export default Landing;
