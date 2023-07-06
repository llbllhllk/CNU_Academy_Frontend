import React from "react";
import styled from "@emotion/styled";

const ListContainer = styled.li`
  display: flex;
  list-style: none;
  font-size: 18px;
  padding: 14px 0;
  border-bottom: 1px solid #000;
  cursor: pointer;

  & div {
    margin-right: 14px;
  }

  & div:last-child {
    margin-right: 0;
  }
`;

const EmojiListItem = ({ emoji, onToggle }) => {
  const handleClickList = () => {
    onToggle(true);
    navigator.clipboard.writeText(emoji.emoji);
  };
  
  return (
    <ListContainer onClick={handleClickList}>
      <div>{emoji.emoji}</div>
      <div>{emoji.aliases}</div>
      <div>{emoji.description}</div>
    </ListContainer>
  );
};

export default EmojiListItem;
