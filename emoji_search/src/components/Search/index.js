import React, { useCallback } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  font-size: 16px;
  outline: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Search = ({ onSearch }) => {
  return <Input onChange={useCallback((e) => onSearch(e.target.value), [])} />;
};

export default Search;
