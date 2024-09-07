import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodos } from "./components/InputTodo";
import "./style.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const validateInput = () => {
    const trimedTodoText = todoText;
    trimedTodoText.trim();

    if (trimedTodoText === "") {
      return {
        success: false,
        message: "TODOを入力してください",
      };
    }

    const totalTodos = incompleteTodos.length + completeTodos.length + 1;
    const MAX_TODO = 10;

    if (totalTodos > MAX_TODO) {
      return {
        success: false,
        message:
          "TODOリストに追加できるのは10個までです。項目を削除してください。",
      };
    }
    return { success: true };
  };

  const onClickAdd = () => {
    const result = validateInput();

    if (!result.success) {
      alert(result.message);
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickToggleTodo = (index, isComplete) => {
    const fromTodos = isComplete ? incompleteTodos : completeTodos;
    const toTodos = isComplete ? completeTodos : incompleteTodos;
    const setFromTodos = isComplete ? setIncompleteTodos : setCompleteTodos;
    const setToTodos = isComplete ? setCompleteTodos : setIncompleteTodos;

    setToTodos([...toTodos, fromTodos[index]]);
    setFromTodos(fromTodos.toSpliced(index, 1));
  };

  return (
    <>
      <InputTodos
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickToggleTodo={onClickToggleTodo}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickToggleTodo={onClickToggleTodo}
      />
    </>
  );
};
