import { ButtonDeleteList } from "./ButtonDeleteList";
import { ButtonInvisibleList } from "./ButtonInvisibleList";
import { ALEART } from "../utils/constants";
import classNames from "classnames";
import styles from "./styles/ListMoreOptions.module.css";

export const ListMoreOptions = ({ list, setListGroup, dropdownRef }) => {
  const handleDeleteList = (e) => {
    if (list.isDefault) return;

    e.stopPropagation();
    const listId = e.currentTarget.dataset.listId;

    setListGroup((prevListGroup) =>
      prevListGroup.filter((list) => list.listId !== listId)
    );
  };

  const handleInvisibleList = (e) => {
    if (list.isDefault) return;

    e.stopPropagation();
    const listId = e.currentTarget.dataset.listId;

    setListGroup((prevListGroup) =>
      prevListGroup.map((prevList) =>
        prevList.listId === listId
          ? { ...prevList, isDisplay: false }
          : prevList
      )
    );
  };

  return (
    <div ref={dropdownRef}>
      <ul
        className={classNames(styles.wrapper, {
          [styles.wrapperDefaultList]: list.isDefault,
        })}
      >
        <li className={styles.delete}>
          <ButtonDeleteList list={list} handleDeleteList={handleDeleteList} />
        </li>
        {list.isDefault && <div>{ALEART.DELETE_LIST_NOT_ALLOWED}</div>}
        <li className={styles.invisible}>
          <ButtonInvisibleList
            list={list}
            handleInvisibleList={handleInvisibleList}
          />
        </li>
        {list.isDefault && <div>{ALEART.INVISIBLE_LIST}</div>}
      </ul>
    </div>
  );
};
