import React from "react";
import styled from "@emotion/styled";
import Task from "../Task";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const TaskList = (props: any) => {
  // typescript로 인해 useSelector의 type이 없어서 에러가 발생한다. 때문에 rootReducer의 타입으로 useSelector의 type을 지정해야한다.
  const tasks = useSelector((store: RootState) => store.tasks);

  return (
    <UnorderedList {...props}>
      {tasks.map((item: any) => (
        <Task
          key={item.id}
          id={item.id}
          content={item.content}
          complete={item.complete}
        />
      ))}
    </UnorderedList>
  );
};

export default TaskList;

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;
