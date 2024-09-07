import { ERROR_MESSAGE, MAX_TODO } from "./constants";

export const validateInput = (props) => {
  const { setErrorMessage, todoText, incompleteTodos, completeTodos } = props;
  const trimedTodoText = todoText;
  const totalTodos = incompleteTodos.length + completeTodos.length;
  trimedTodoText.trim();

  switch (true) {
    case trimedTodoText === "":
      setErrorMessage(ERROR_MESSAGE.BLANK);
      return false;
    case totalTodos >= MAX_TODO:
      setErrorMessage(ERROR_MESSAGE.EXCESS);
      return false;
    default:
      setErrorMessage("");
      return true;
  }
};
