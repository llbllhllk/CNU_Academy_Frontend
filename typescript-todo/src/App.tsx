import React from "react";
import styled from "@emotion/styled";

import TaskProvider from "./contexts/TaskProvider";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <Header>todo</Header>
      <NewTaskForm />
      <TaskList css={{ marginTop: 16 }} />
    </Container>
  );
};

export default App;
