import React from "react";
import Task from "../components/Task";

export default {
  title: "Component/Task",
  component: Task,
};

export const Default = () => {
  return <Task id="1234" content="Todo" complete />;
};
