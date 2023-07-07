import React from "react";
import Task from "../components/Task";

export default {
  title: "Component/Task",
  component: Task,
};

export const Default = (args) => {
  const task = {
    content: "출근하기",
    complete: false,
  };

  return <Task {...args} content={task.content} complete={task.complete} />;
};
