import React from 'react';
import { MinervaContainer, Title, Subtitle } from './homeStyles';
import { getMinervaGreeting } from './homeDM';

const Minerva = () => (
  <MinervaContainer>
    <Title>Diosa Minerva</Title>
    <Subtitle>{getMinervaGreeting()}</Subtitle>
  </MinervaContainer>
);

export default Minerva;
