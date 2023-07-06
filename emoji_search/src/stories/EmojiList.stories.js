import React from "react";
import EmojiList from "../components/EmojiList";

export default {
  title: "Component/EmojiList",
  component: EmojiList,
};

export const Default = (args) => {
  return <EmojiList {...args} />;
};
