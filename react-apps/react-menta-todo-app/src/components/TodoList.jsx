import React from "react";
import { formatDate } from "../utils/utils";
import * as Style from "../style/styleTodoList";

const ContentsIncomplete = (props) => {
  const { index, todo, setTodoInfo, handleOnChange, setIsModalOpen } = props;

  return (
    <div style={Style.task}>
      <input
        type="checkbox"
        style={{ marginRight: "15px" }}
        onChange={(e) => {
          handleOnChange(e, index);
        }}
      ></input>
      <div style={{ width: "60%" }}>{todo.title}</div>
      <div style={{ width: "40%" }}>
        <i
          className="fa-regular fa-calendar-days"
          style={{ marginRight: "10px" }}
        ></i>
        {formatDate(todo.deadline)}
      </div>
      <i
        className="fa-duotone fa-solid fa-pen-to-square"
        style={{ marginRight: "10px" }}
        onClick={() => {
          setTodoInfo(() => ({ ...todo, isNew: false }));
          setIsModalOpen(true);
        }}
      ></i>
      {todo.priority === "Medium" && (
        <div style={{ ...Style.priority, backgroundColor: "yellow" }}></div>
      )}
      {todo.priority === "High" && (
        <div style={{ ...Style.priority, backgroundColor: "red" }}></div>
      )}
      {todo.priority === "Low" && (
        <div style={{ ...Style.priority, backgroundColor: "gray" }}></div>
      )}
    </div>
  );
};

const ContentsComplete = (props) => {
  const { todo, index, handleOnChange } = props;

  return (
    <>
      <div style={Style.task}>
        <input
          type="checkbox"
          defaultChecked={true}
          style={{ marginRight: "15px" }}
          onChange={(e) => {
            handleOnChange(e, index);
          }}
        ></input>
        <div style={{ width: "80%" }}>{todo.title}</div>
        <div style={{ width: "20%" }}>{formatDate(todo.deadline)}</div>
        {todo.priority === "Medium" && (
          <div style={{ ...Style.priority, backgroundColor: "yellow" }}></div>
        )}
        {todo.priority === "High" && (
          <div style={{ ...Style.priority, backgroundColor: "red" }}></div>
        )}
        {todo.priority === "Low" && (
          <div style={{ ...Style.priority, backgroundColor: "gray" }}></div>
        )}
      </div>
    </>
  );
};

export const TodoList = (props) => {
  const { todos, setTodos, setTodoInfo, setIsModalOpen } = props;

  // チェックボックスによる完了、未完了のトグル
  const handleOnChange = (e, index) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo, prevTodoIndex) =>
        prevTodoIndex === index
          ? { ...prevTodo, isComplete: e.target.checked }
          : prevTodo
      )
    );
  };

  return (
    <div style={Style.listContentsWrapper}>
      {todos.length === 0 ? (
        <p style={Style.listNoData}>No data to display</p>
      ) : (
        <>
          <div style={Style.listContentsIncomplete}>
            {todos.map((todo, index) => (
              <React.Fragment key={index}>
                {!todo.isComplete && (
                  <ContentsIncomplete
                    index={index}
                    todo={todo}
                    setTodoInfo={setTodoInfo}
                    handleOnChange={handleOnChange}
                    setIsModalOpen={setIsModalOpen}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div style={Style.listContentsComplete}>
            <p style={{ fontSize: "0.6rem", margin: "auto" }}>Completed</p>
            {todos.map((todo, index) => (
              <React.Fragment key={index}>
                {todo.isComplete && (
                  <ContentsComplete
                    todo={todo}
                    index={index}
                    handleOnChange={handleOnChange}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
