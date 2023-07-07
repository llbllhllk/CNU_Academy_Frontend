import React from "react";
import PropTypes from "prop-types";
import { useTasks } from "../../contexts/TaskProvider";

import styled from "@emotion/styled";
import Toggle from "../Toggle";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 0 8px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const Task = ({ id, content, complete, ...props }) => {
  const { updateTask, removeTask } = useTasks();

  return (
    <ListItem {...props}>
      <Toggle on={complete} onChange={(e) => updateTask(id, e.target.value)} />
      <Content complete={complete}>{content}</Content>
      <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
    </ListItem>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  complete: PropTypes.bool,
};

export default Task;
