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

const listRow = {
  display: "flex",
  alignItems: "center",
};

const todoItem = {
  margin: "6px",
};

export const CompleteTodos = (props) => {
  const { completeTodos, onClickToggleTodo } = props;

  return (
    <div style={styleCompleteArea}>
      <p style={styleTitle}>完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => (
          // 一意のkeynにする
          <li key={`${todo}-${index}`}>
            <div style={listRow}>
              <p style={todoItem}>{todo}</p>
              <button onClick={() => onClickToggleTodo(index, false)}>
                戻す
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
