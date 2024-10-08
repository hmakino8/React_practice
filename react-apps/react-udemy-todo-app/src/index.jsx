import { StrictMode } from "react"; // 厳密なルールで記述する
import { createRoot } from "react-dom/client";
import { Todo } from "./Todo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
