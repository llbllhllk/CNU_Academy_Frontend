import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import useToggle from "../../hooks/useToggle";

const ToggleContainer = styled.label`
  display: inlint-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  border-radius: 15px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: backgroud-color 0.2s ease-in-out;

  &:after {
    content: "";
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fff;
    transition: left 0.2s ease-in-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: lightgreen;
  }

  &:checked + div:after {
    left: calc(100% - 26px);
  }
`;

const Toggle = ({ on = false, onChange, ...props }) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (e) => {
    toggle();
    onChange && onChange(e);
  };

  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" onChange={handleChange} checked={checked} />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

Toggle.porpTypes = {
  on: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggle;
