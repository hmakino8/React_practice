import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodos } from "./components/InputTodo";
import "./style.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const validateInput = () => {
    const trimedTodoText = todoText;
    trimedTodoText.trim();

    if (trimedTodoText === "") {
      setErrorMessage("⚠️TODOを入力してください");
      return false;
    }

    const totalTodos = incompleteTodos.length + completeTodos.length + 1;
    const MAX_TODO = 10;

    if (totalTodos > MAX_TODO) {
      setErrorMessage(
        "⚠️TODOリストに追加できるのは10個までです。\n項目を削除してください。"
      );
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const onClickAdd = () => {
    if (!validateInput()) return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index, isComplete) => {
    const newTodos = isComplete ? [...completeTodos] : [...incompleteTodos];
    newTodos.splice(index, 1);
    isComplete ? setCompleteTodos(newTodos) : setIncompleteTodos(newTodos);
    setErrorMessage("");
  };

  const onClickToggleTodo = (index, isComplete) => {
    const fromTodos = isComplete ? incompleteTodos : completeTodos;
    const toTodos = isComplete ? completeTodos : incompleteTodos;
    const setFromTodos = isComplete ? setIncompleteTodos : setCompleteTodos;
    const setToTodos = isComplete ? setCompleteTodos : setIncompleteTodos;

    setToTodos([...toTodos, fromTodos[index]]);
    setFromTodos(fromTodos.toSpliced(index, 1));
    setErrorMessage("");
  };

  return (
    <>
      <InputTodos
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        errorMessage={errorMessage}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickToggleTodo={onClickToggleTodo}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickToggleTodo={onClickToggleTodo}
        onClickDelete={onClickDelete}
      />
    </>
  );
};
