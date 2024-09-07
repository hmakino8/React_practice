import { TODO_TITLE, BUTTON_LABELS } from "../utils/constants";

const styleIncompleteArea = {
  border: "2px solid #aacfd0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

const styleTitle = {
  textAlign: "center",
  marginTop: "0",
  fontWeight: "bold",
};

const listRow = {
  display: "flex",
  alignItems: "center",
};

const todoItem = {
  margin: "6px",
};

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickToggleTodo, onClickDelete } = props;

  return (
    <div style={styleIncompleteArea}>
      <p style={styleTitle}>{TODO_TITLE.INCOMPLETE}</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
          // 一意のkeyにする
          <li key={`${todo}-${index}`}>
            <div style={listRow}>
              <p style={todoItem}>{todo}</p>
              <button onClick={() => onClickToggleTodo(index, true)}>
                {BUTTON_LABELS.RESUME}
              </button>
              <button onClick={() => onClickDelete(index, false)}>
                {BUTTON_LABELS.DELETE}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
