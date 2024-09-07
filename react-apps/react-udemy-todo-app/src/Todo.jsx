import { useState } from "react";
import "./style.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const validateInput = () => {
    const trimedTodoText = todoText.trim();
    const totalTodos = incompleteTodos.length + completeTodos.length + 1;
    const MAX_TODO = 10;

    if (trimedTodoText === "") {
      return {
        success: false,
        message: "TODOを入力してください",
      };
    }
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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickToggleTodo(index, true)}>
                  完了
                </button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickToggleTodo(index, false)}>
                  戻す
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
