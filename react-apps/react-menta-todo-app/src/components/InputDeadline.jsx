import { useState, useEffect, useCallback } from "react";
import { IconClock } from "./Icon";
import styles from "./styles/InputDeadline.module.css";

export const InputDeadline = ({ task, handleUpdateTaskInfo }) => {
  const [toggleDaysLeft, setToggleDaysLeft] = useState(false);
  const [message, setMessage] = useState("");

  const calculateWidth = (text) => {
    let width = 0;

    for (let char of text) {
      const code = char.charCodeAt(0);

      if (code >= 0x00 && code <= 0x7f) {
        width += 1;
      } else {
        width += 2;
      }
    }
    return width;
  };

  const messageWidth = calculateWidth(message);

  const calculateDaysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const timeDiff = deadlineDate - now;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  const daysLeftMessage = useCallback((deadline) => {
    const daysLeft = calculateDaysLeft(deadline);

    switch (true) {
      case daysLeft >= 2:
        return `${daysLeft}日後`;
      case daysLeft === 1:
        return `明日`;
      case daysLeft === 0:
        return `今日`;
      default:
        return `${-daysLeft}日超過`;
    }
  }, []);

  useEffect(() => {
    setMessage(daysLeftMessage(task.deadline));
  }, [task.deadline, daysLeftMessage]);

  return (
    <>
      <IconClock />
      {toggleDaysLeft ? (
        <input
          name={"deadline"}
          value={task.deadline}
          data-task-id={task.taskId}
          type="datetime-local"
          onChange={handleUpdateTaskInfo}
          onBlur={() => setToggleDaysLeft((prev) => !prev)}
          className={styles.daysLeft}
        />
      ) : (
        <input
          readOnly
          value={message}
          onClick={() => setToggleDaysLeft((prev) => !prev)}
          style={{ width: `${messageWidth}ch` }}
          className={styles.daysLeftMessage}
        />
      )}
    </>
  );
};
