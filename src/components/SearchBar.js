import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

const SearchBarInput = styled.input`
  padding: 10px 15px;
  width: 800px;
  display: block;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  font-size: 1.2em;
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -400px;
`;

const SearchBar = ({ onChange }) => (
  <SearchBarInput onChange={onChange}/>
);

SearchBar.propTypes = {
  onChange: func,
};

export default SearchBar;