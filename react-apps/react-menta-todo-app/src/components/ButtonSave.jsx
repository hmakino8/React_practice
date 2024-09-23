import React from "react";
import { LABEL } from "../utils/constants";
import styles from "./styles/ButtonSave.module.css";
import classNames from "classnames";

export const ButtonSave = ({ modalData, taskAdder, taskEditer }) => (
  <div className={styles.container}>
    <button
      disabled={!modalData.listId}
      className={classNames(styles.buttonDisabled, {
        [styles.buttonActive]: modalData.listId,
      })}
      onClick={modalData.taskId ? taskEditer : taskAdder}
    >
      {LABEL.SAVE}
    </button>
  </div>
);
