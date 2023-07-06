import React from "react";
import styled from "@emotion/styled";

import EmojiListItem from "../EmojiListItem";

const Container = styled.ul`
  width: 100%;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 24px;
`;

const EmojiList = ({ emojis, onToggle, keyword }) => {
  return (
    <Container>
      {emojis
        .filter((emoji) => emoji.description.indexOf(keyword) >= 0)
        .map((emoji, idx) => (
          <EmojiListItem key={idx} emoji={emoji} onToggle={onToggle} />
        ))}
    </Container>
  );
};

export default EmojiList;
