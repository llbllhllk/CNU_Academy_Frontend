import React from "react";
import styled from "@emotion/styled";

const ModalContainer = styled.div`
  width: 40%;
  text-align: center;
  padding: 3rem 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 10px;
`;

const Description = styled.strong`
  display: block;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  width: 4rem;
  padding: 6px 0;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`;

const ModalOverlay = ({ onToggle }) => {
  return (
    <ModalContainer>
      <Description>복사가 완료되었습니다!</Description>
      <Button onClick={() => onToggle(false)}>확인</Button>
    </ModalContainer>
  );
};

export default ModalOverlay;
