import { PULLDOWN } from "../utils/constants";
import classNames from "classnames";
import styles from "./styles/SelectPriority.module.css";

export const SelectPriority = ({ task, handleUpdateTaskInfo }) => (
  <select
    name={"priority"}
    value={task.priority}
    data-task-id={task.taskId}
    onChange={handleUpdateTaskInfo}
    className={classNames(styles.priority, {
      [styles.priorityHigh]: task.priority === "High",
      [styles.priorityMedium]: task.priority === "Medium",
      [styles.priorityLow]: task.priority === "Low",
    })}
  >
    <option value="High">{PULLDOWN.PRIORITY_HIGH}</option>
    <option value="Medium">{PULLDOWN.PRIORITY_MEDIUM}</option>
    <option value="Low">{PULLDOWN.PRIORITY_LOW}</option>
  </select>
);
