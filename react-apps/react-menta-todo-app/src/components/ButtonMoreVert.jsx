export const MoreVertOnTask = (props) => {
  const { task, setTasks, setIsModalOpen, setModalData, dropdownRef } = props;

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    const taskId = e.currentTarget.dataset.taskId;

    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== taskId));
  };

  const handleOpenTaskInfo =
    ({ task, setIsModalOpen, setModalData }) =>
    (e) => {
      e.stopPropagation();

      setModalData((prevModalData) => ({ ...prevModalData, ...task }));
      setIsModalOpen(true);
    };

  return (
    <div ref={dropdownRef}>
      <ul
        style={{
          width: "130px",
          position: "absolute",
          top: "0",
          right: "50px",
          height: "95%",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          listStyle: "none",
          padding: "5px 0",
          margin: "0",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <li
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            fontSize: "0.8rem",
            width: "100%",
          }}
        >
          <button
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              border: "none",
              width: "100%",
            }}
            data-task-id={task.taskId}
            onClick={handleDeleteTask}
          >
            <Icon.Trash />
            <p>削除</p>
          </button>
        </li>
        <li
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            fontSize: "0.8rem",
            width: "100%",
          }}
        >
          <button
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              border: "none",
              width: "100%",
            }}
            onClick={handleOpenTaskInfo({ task, setIsModalOpen, setModalData })}
          >
            <Icon.Info />
            <p>詳細</p>
          </button>
        </li>
      </ul>
    </div>
  );
};
