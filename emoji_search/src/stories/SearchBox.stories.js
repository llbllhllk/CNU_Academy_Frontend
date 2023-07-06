import React from "react";
import SearchBox from "../components/SearchBox";

export default {
  title: "Component/SearchBox",
  component: SearchBox,
  argTypes: {},
};

export const Default = (args) => {
  return <SearchBox {...args} />;
};
