import React from "react";
import Header from "../components/Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {},
};

export const Default = (args) => {
  return <Header {...args} />;
};
