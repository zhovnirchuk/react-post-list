import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

const Button = styled.button`
  display: block;
  margin: 20px auto;
  border: 1px solid lightgrey;
  font-size: 1em;
  padding: 10px 20px;
`;

const MoreButton = ({ onClick }) => (
  <Button onClick={onClick}>
    More!
  </Button>
);

MoreButton.propTypes = {
  onClick: func,
};

export default MoreButton;