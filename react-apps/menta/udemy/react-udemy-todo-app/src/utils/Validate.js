import { ERROR_MESSAGE, MAX_TODO, CHARACTER_LIMIT } from "./constants";

export const validateInput = (props) => {
  const { setErrorMessage, todoText, incompleteTodos, completeTodos } = props;
  const trimedTodoText = todoText;
  const totalTodos = incompleteTodos.length + completeTodos.length;
  trimedTodoText.trim();

  switch (true) {
    case todoText.length > CHARACTER_LIMIT:
      setErrorMessage(ERROR_MESSAGE.CHARACTER_LIMIT);
      return false;
    case trimedTodoText === "":
      setErrorMessage(ERROR_MESSAGE.BLANK);
      return false;
    case totalTodos >= MAX_TODO:
      setErrorMessage(ERROR_MESSAGE.EXCESS_QUANTITY);
      return false;
    default:
      setErrorMessage("");
      return true;
  }
};
