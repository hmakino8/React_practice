import * as Style from "../style/styleTodoList";

export const TodoList = (props) => {
  const { todos } = props;
  return (
    <div style={Style.listContentsWrapper}>
      {todos.length === 0 ? (
        <p style={Style.listNoData}>No data to display</p>
      ) : (
        <>
          <div style={Style.listContentsIncomplete}>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
          </div>
          <div style={Style.listContentsComplete}>
            <p style={{ fontSize: "0.6rem", margin: "auto" }}>Completed</p>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
            <div style={Style.task}>
              <input type="checkbox"></input>
              <div style={{ width: "100%" }}>{todos[0].title}</div>
              <div style={{ width: "100%" }}>{todos[0].deadline}</div>
              <div>{todos[0].priority}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
