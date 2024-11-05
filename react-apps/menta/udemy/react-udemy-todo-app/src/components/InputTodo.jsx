const inputArea = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "auto",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

const styleParagraph = {
  fontSize: "10px",
  whiteSpace: "pre-line",
  color: "red",
};

export const InputTodos = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, errorMessage } = props;

  return (
    <div style={inputArea}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      ></input>
      <button onClick={onClickAdd}>追加</button>
      {errorMessage && <p style={styleParagraph}>{errorMessage}</p>}
    </div>
  );
};
