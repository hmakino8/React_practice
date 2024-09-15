import React from "react";
import { formatDate } from "../utils/utils";
import * as Style from "../style/styleTodoList";
import * as Style2 from "../style/styleModal";
import { initFormData, CreateToodleIcon } from "../utils/utils";

const ContentsIncomplete = (props) => {
  const { index, todo, setFormData, handleOnChange, setIsModalOpen } = props;

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
          display: "flex",
          width: "50%",
          overflow: "hidden",
          whiteSpace: "norap",
          textAlign: "center",
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "20px" }}
        >
          schedule
        </span>
        {formatDate(todo.deadline)}
      </div>
      <button
        style={{
          padding: "0",
          fontSize: "1px",
          marginRight: "5px",
          borderRadius: "50%",
          border: "none",
          color: "rgb(100, 100, 100)",
        }}
        onClick={() => {
          setFormData(() => ({ ...todo, isEditing: true }));
          setIsModalOpen(true);
        }}
      >
        <span className="material-symbols-outlined">more_vert</span>
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
  const { setIsModalOpen, setFormData } = props;

  return (
    <>
      <button
        style={Style2.buttonAddList}
        onClick={() => {
          setFormData(initFormData());
          setIsModalOpen(true);
        }}
      >
        <CreateToodleIcon />
        <p style={Style2.buttonAddTaskParagraph}>プロジェクトの追加</p>
      </button>
    </>
  );
};

export const TodoList = (props) => {
  const { taskList, setTaskList, setFormData, setIsModalOpen } = props;

  // チェックボックスによる完了、未完了のトグル
  const handleOnChange = (e, index) => {
    setTaskList((prevTodos) =>
      prevTodos.map((prevTodo, prevTodoIndex) =>
        prevTodoIndex === index
          ? { ...prevTodo, isComplete: e.target.checked }
          : prevTodo
      )
    );
  };

  return (
    <>
      <Tasks setIsModalOpen={setIsModalOpen} setFormData={setFormData} />
      <div style={Style.listContentsWrapper}>
        {taskList.length === 0 ? (
          <p style={Style.listNoData}>No data to display</p>
        ) : (
          <>
            <div style={Style.listContents}>
              <p style={{ fontSize: "20px", margin: "5px" }}>未完了</p>
              <p
                style={{
                  display: "flex",
                  fontSize: "1rem",
                  height: "10px",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    display: "flex",
                    borderRadius: "10px",
                    padding: "5px",
                    width: "130px",
                    border: "none",
                    color: "rgb(66, 133, 244)",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: "rgb(66, 133, 244)",
                      fontSize: "1.2rem",
                      marginRight: "5px",
                    }}
                  >
                    add_task
                  </span>
                  タスクを追加
                </button>
              </p>
              <div style={Style.tasksWrapper}>
                {taskList.map((todo, index) => (
                  <React.Fragment key={index}>
                    {!todo.isComplete && (
                      <ContentsIncomplete
                        index={index}
                        todo={todo}
                        setFormData={setFormData}
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
              {taskList.map((todo, index) => (
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
              {taskList.map((todo, index) => (
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
              {taskList.map((todo, index) => (
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
