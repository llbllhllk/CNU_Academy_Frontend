import React, { FormEvent, useState } from "react";
import styled from "@emotion/styled";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks";

const NewTaskForm = (props: any) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // addTask(task);
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <SubmitButton>확인</SubmitButton>
    </Form>
  );
};

export default NewTaskForm;

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid #000;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: #000;
  box-sizing: border-box;
  cursor: pointer;
`;
