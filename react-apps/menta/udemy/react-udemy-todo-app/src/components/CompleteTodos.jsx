import { TODO_TITLE, BUTTON_LABELS } from "../utils/constants";

const styleCompleteArea = {
  border: "2px solid #aacfd0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#c9dede",
};

const styleTitle = {
  textAlign: "center",
  marginTop: "0",
  fontWeight: "bold",
};

const styleListRow = {
  display: "flex",
  alignItems: "center",
};

const styleTodoItem = {
  margin: "6px",
};

export const CompleteTodos = (props) => {
  const { completeTodos, onClickToggleTodo, onClickDelete } = props;

  return (
    <div style={styleCompleteArea}>
      <p style={styleTitle}>{TODO_TITLE.COMPLETE}</p>
      <ul>
        {completeTodos.map((todo, index) => (
          // 一意のkeyにする
          <li key={`${todo}-${index}`}>
            <div style={styleListRow}>
              <p style={styleTodoItem}>{todo}</p>
              <button onClick={() => onClickToggleTodo(index, false)}>
                {BUTTON_LABELS.RESUME}
              </button>
              <button onClick={() => onClickDelete(index, true)}>
                {BUTTON_LABELS.DELETE}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
