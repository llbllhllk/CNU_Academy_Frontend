import React from "react";
import styled from "@emotion/styled";

import Task from "../Task";
import { useTasks } from "../../contexts/TaskProvider";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  margin-top: 16px;
  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const TaskList = (props) => {
  const { tasks } = useTasks();

  return (
    <UnorderedList {...props}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          complete={task.complete}
        />
      ))}
    </UnorderedList>
  );
};

export default TaskList;
