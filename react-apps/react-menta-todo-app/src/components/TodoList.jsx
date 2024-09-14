import React from "react";
import { formatDate } from "../utils/utils";
import * as Style from "../style/styleTodoList";
import * as Style2 from "../style/styleModal";
import { initializeTodoInfo } from "../utils/utils";

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
      <div
        style={{ width: "50%", overflow: "hidden", textOverFlow: "ellipsis" }}
      >
        {todo.title}
      </div>
      <div
        style={{
          width: "50%",
          overflow: "hidden",
          whiteSpace: "norap",
          textAlign: "center",
        }}
      >
        <i className="fa-regular fa-clock" style={{ marginRight: "5%" }}></i>
        {formatDate(todo.deadline)}
      </div>
      <button
        style={{
          marginRight: "5px",
          borderRadius: "50%",
          border: "none",
          // backgroundColor: "#fff",
        }}
        onClick={() => {
          setTodoInfo(() => ({ ...todo, isNew: false }));
          setIsModalOpen(true);
        }}
      >
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
      <div
        style={{
          ...Style.priority,
          ...Style.priorityColor[todo.priority],
        }}
      ></div>
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
        <div style={{ width: "70%" }}>{todo.title}</div>
        <div style={{ width: "30%" }}>{formatDate(todo.deadline)}</div>
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

const Tasks = (props) => {
  const { setIsModalOpen, setTodoInfo } = props;

  return (
    <>
      <button
        className="buttonAddList"
        style={Style2.buttonAddList}
        onClick={() => {
          setTodoInfo(initializeTodoInfo());
          setIsModalOpen(true);
        }}
      >
        <i className="fa-thin fa-plus" style={{ marginLeft: "10px" }}></i>
        <p style={Style2.buttonAddTaskParagraph}>作成</p>
      </button>
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
    <>
      <Tasks setIsModalOpen={setIsModalOpen} setTodoInfo={setTodoInfo} />
      <div style={Style.listContentsWrapper}>
        {todos.length === 0 ? (
          <p style={Style.listNoData}>No data to display</p>
        ) : (
          <>
            <div style={Style.listContents}>
              <p
                style={{
                  display: "flex",
                  fontSize: "1rem",
                  height: "10px",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                未完了
                <button
                  className="addTask"
                  style={{
                    borderRadius: "10px",
                    padding: "5px",
                    width: "130px",
                    textAlign: "left",
                    marginLeft: "10px",
                    border: "none",
                    color: "rgb(66, 133, 244)",
                    // backgroundColor: "rgba(66, 133, 244, 0.1)",
                    backgroundColor: "none",
                  }}
                >
                  <i
                    className="fa-regular fa-circle-check"
                    style={{ marginRight: "5px" }}
                  ></i>
                  タスクを追加
                </button>
              </p>
              <div style={Style.tasksWrapper}>
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
            </div>
            <div style={Style.listContents}>
              <p style={{ fontSize: "0.6rem", margin: "auto" }}>完了</p>
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
            <div style={Style.listContents}>
              <p style={{ fontSize: "0.6rem", margin: "auto" }}>期限切れ</p>
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
            <div style={Style.listContents}>
              <p style={{ fontSize: "0.6rem", margin: "auto" }}>ゴミ箱</p>
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
    </>
  );
};
