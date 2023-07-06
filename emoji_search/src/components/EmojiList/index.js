import React from "react";
import styled from "@emotion/styled";
import EmojiListItem from "../EmojiListItem";

const Container = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({ emojis, keyword }) => {
  return (
    <Container>
      {emojis
        .filter((emoji) => emoji.description.indexOf(keyword) >= 0)
        .map((emoji, idx) => (
          <EmojiListItem key={idx} emoji={emoji} />
        ))}
    </Container>
  );
};

export default EmojiList;
