import React, { useState } from "react";
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

  // debug
  // useEffect(() => {
  //   // コンポーネントがマウントされたとき、または titleName が変更されたときの処理
  //   console.log(`${titleName} component mounted or updated`);
  // }, [titleName]); // 依存配列に titleName を指定

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

export const InputForm = ({ closeModal, setTodos }) => {
  const [todoInfo, setTodoInfo] = useState({
    title: "",
    priority: "",
    deadline: "",
    comments: "",
  });

  const addTodo = () => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, todoInfo];
      return newTodos;
    });
    closeModal();
  };

  // debug
  // useEffect(() => {
  //   console.log("todoInfo changed:", todoInfo);
  // }, [todoInfo]);

  return (
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
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};
