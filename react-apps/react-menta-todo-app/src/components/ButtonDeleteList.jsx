import { IconTrash } from "./Icon";
import { LABEL } from "../utils/constants";
import classNames from "classnames";
import styles from "./styles/ButtonDeleteList.module.css";

export const ButtonDeleteList = ({ list, handleDeleteList }) => (
  <button
    disabled={list.isDefault}
    className={classNames(styles.deleteButton, {
      [styles.deleteButtonWithDefaultList]: list.isDefault,
    })}
    data-list-id={list.listId}
    onClick={handleDeleteList}
  >
    <IconTrash />
    <p>{LABEL.DELETE_LIST}</p>
  </button>
);
