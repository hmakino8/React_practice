import { ButtonDeleteList } from "./ButtonDeleteList";
import { ButtonInvisibleList } from "./ButtonInvisibleList";
import { ALEART } from "../utils/constants";
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

  const activeIsSortByDateCreated = () => {
    setListGroup((prevListGroup) =>
      prevListGroup.map((prevList) => {
        if (prevList.listId === list.listId) {
          return { ...prevList, isSortByDateCreated: true };
        }
        return prevList;
      })
    );
  };

  return (
    <div ref={dropdownRef}>
      <ul className={styles.wrapper}>
        <li className={styles.fullWidth}>並び替え</li>
        <li className={styles.fullWidth}>
          <button
            className={styles.fullButton}
            onClick={activeIsSortByDateCreated}
          >
            作成日
          </button>
        </li>
        <li className={styles.fullWidth}>
          <button className={styles.fullButton}>更新日時</button>
        </li>
        <p className={styles.border}></p>
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
        {list.isDefault && (
          <div className={styles.alart}>{ALEART.INVISIBLE_LIST}</div>
        )}
      </ul>
    </div>
  );
};
