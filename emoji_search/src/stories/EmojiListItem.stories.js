import React from "react";
import EmojiListItem from "../components/EmojiListItem";

export default {
  title: "Component/EmojiListItem",
  component: EmojiListItem,
};

export const Default = (args) => {
  return <EmojiListItem {...args} />;
};
