import React from "react";
import TaskList from "../components/TaskList";
import TaskProvider from "../contexts/TaskProvider";

export default {
  title: "Component/TaskList",
  component: TaskList,
};

export const Default = () => {
  const tasks = [
    {
      id: "123",
      content: "Todo",
      complete: false,
    },
    {
      id: "124",
      content: "Hello",
      complete: false,
    },
    {
      id: "125",
      content: "World",
      complete: true,
    },
  ];

  return (
    <TaskProvider initialTasks={tasks}>
      <TaskList />
    </TaskProvider>
  );
};
