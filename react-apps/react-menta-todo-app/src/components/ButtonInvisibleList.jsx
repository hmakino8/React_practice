import { IconVisibilityOff } from "./Icon";
import { LABEL } from "../utils/constants";
import classNames from "classnames";
import styles from "./styles/ButtonInvisibleList.module.css";

export const ButtonInvisibleList = ({ list, handleInvisibleList }) => (
  <button
    className={classNames(styles.buttonInvisible, {
      [styles.buttonInvisibleWithDefaultList]: list.isDefault,
    })}
    data-list-id={list.listId}
    onClick={handleInvisibleList}
  >
    <IconVisibilityOff />
    <p>{LABEL.INVISIBLE_LIST}</p>
  </button>
);
