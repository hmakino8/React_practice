import React from "react";
import { initializeTodoInfo, generateId } from "../utils/utils";
import * as Style from "../style/styleInputForm";

const CreateInputForm = ({ titleName, todoInfo, setTodoInfo }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setTodoInfo((prevTodoInfo) => ({
      ...prevTodoInfo,
      [name]: value,
    }));
  };

  const commonProps = {
    id: titleName,
    name: titleName,
    value: todoInfo[titleName] || "",
    onChange: handleOnChange,
  };

  switch (titleName) {
    case "title":
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{titleName}</label>
          <input type="text" {...commonProps} />
        </div>
      );
    case "priority":
      return (
        <div style={{ ...Style.inputForm, ...Style.priority }}>
          <label style={Style.label}>{titleName}</label>
          <select {...commonProps}>
            <option value="" disabled>
              選択してください
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      );
    case "deadline":
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{titleName}</label>
          <input type="datetime-local" {...commonProps} />
        </div>
      );
    case "comment":
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{titleName}</label>
          <textarea {...commonProps} />
        </div>
      );
    default:
      return null;
  }
};

export const InputForm = (props) => {
  const { setTodos, todoInfo, setTodoInfo, setIsModalOpen } = props;

  const addTodo = () => {
    const uniqueId = generateId();
    setTodos((prevTodos) => [...prevTodos, { ...todoInfo, id: uniqueId }]);
    console.log(uniqueId);
    // Add Taskを押した時に前回の入力が残らないようtodoInfoをリセット
    setTodoInfo(initializeTodoInfo());
    setIsModalOpen(false);
  };

  const editTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === todoInfo.id) {
          return { ...prevTodo, ...todoInfo };
        } else {
          return prevTodo;
        }
      });
    });

    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <CreateInputForm
          titleName="title"
          todoInfo={todoInfo}
          setTodoInfo={setTodoInfo}
        />
        <div style={Style.priorityAndDeadline}>
          <CreateInputForm
            titleName="priority"
            todoInfo={todoInfo}
            setTodoInfo={setTodoInfo}
          />
          <CreateInputForm
            titleName="deadline"
            todoInfo={todoInfo}
            setTodoInfo={setTodoInfo}
          />
        </div>
        <CreateInputForm
          titleName="comment"
          todoInfo={todoInfo}
          setTodoInfo={setTodoInfo}
        />
        <button onClick={closeModal}>Close</button>
        {todoInfo.isNew ? (
          <button onClick={addTodo}>Add Task</button>
        ) : (
          <button onClick={editTodo}>Done</button>
        )}
      </div>
    </>
  );
};
