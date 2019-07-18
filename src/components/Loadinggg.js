import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 150px;
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -75px;
  font-size: 2em;
`;

const Loading = () => (
  <LoadingContainer>
    Loading...
  </LoadingContainer>
);

export default Loading;