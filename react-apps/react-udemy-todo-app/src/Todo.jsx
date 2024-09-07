import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodos } from "./components/InputTodo";
import { validateInput } from "./utils/Validate";
import "./styles/style.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    const props = { setErrorMessage, todoText, incompleteTodos, completeTodos };

    if (!validateInput(props)) return;

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
