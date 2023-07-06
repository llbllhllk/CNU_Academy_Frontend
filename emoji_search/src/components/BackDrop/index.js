import React from "react";
import styled from "@emotion/styled";

const BackDropContainer = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(229, 229, 229, 0.9);
`;

const BackDrop = () => {
  return <BackDropContainer />;
};

export default BackDrop;
