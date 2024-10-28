import styled from 'styled-components';

export const MinervaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #001f3f; /* Azul marino profundo */
  color: #ffffff; /* Blanco */
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: #ffd700; /* Dorado */
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ffffff; /* Blanco */
  margin-top: 10px;
  text-align: center;
`;

export const WisdomQuote = styled.span`
  font-size: 1.2rem;
  color: #ffd700; /* Dorado */
  font-style: italic;
  margin-top: 15px;
`;
