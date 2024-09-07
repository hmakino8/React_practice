export const CompleteTodos = (props) => {
  const { completeTodos, onClickToggleTodo } = props;

  return (
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
  );
};
