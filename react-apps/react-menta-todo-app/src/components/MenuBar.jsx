import { useState } from "react";
import { ButtonDisplayModal } from "./ButtonDisplayModal";
import { generateId } from "../utils/utils";
import { PLACEHOLDER } from "../utils/constants";
import {
  CreateTaskList as IconCreateTaskList,
  KeyboardControlKey as IconKeyboardControlKey,
  KeyboardArrowDown as IconKeyboardArrowDown,
} from "./Icon";
import styles from "./styles/MenuBar.module.css";

export const MenuBar = ({ listGroup, setListGroup, setIsModalOpen }) => {
  const [listName, setListName] = useState("");
  const [isActiveCreateList, setIsActiveCreateList] = useState(false);
  const [isListNameVisible, setIsListNameVisible] = useState(true);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && listName.trim() !== "") {
      setListGroup((prevListGroup) => [
        {
          listId: generateId(),
          listName: listName,
          isDisplay: true,
          isDefault: false,
          tasks: [],
        },
        ...prevListGroup,
      ]);

      setListName("");
      if (isActiveCreateList) setIsActiveCreateList(false);
    }
  };

  const handleListContents = (e) => {
    const listId = e.target.dataset.listId;

    setListGroup((prevListGroup) =>
      prevListGroup.map((prevList) =>
        prevList.listId === listId
          ? { ...prevList, isDisplay: !prevList.isDisplay }
          : prevList
      )
    );
  };

  return (
    <div className={styles.container}>
      <ButtonDisplayModal setIsModalOpen={setIsModalOpen} />
      <IconCreateTaskList
        isActiveCreateList={isActiveCreateList}
        setIsActiveCreateList={setIsActiveCreateList}
      />
      {isActiveCreateList && (
        <input
          autoFocus
          value={listName}
          placeholder={PLACEHOLDER.CREATE_TASK_LIST}
          onChange={(e) => setListName(e.target.value)}
          onBlur={() => isActiveCreateList && setIsActiveCreateList(false)}
          onKeyDown={handleKeyDown}
          className={styles.createList}
        />
      )}
      <div
        style={{
          fontSize: "0.9rem",
          position: "absolute",
          width: "90%",
          top: "210px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        リスト
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            border: "none",
            borderRadius: "100%",
          }}
          onClick={() => setIsListNameVisible((prev) => !prev)}
        >
          {isListNameVisible ? (
            <IconKeyboardControlKey />
          ) : (
            <IconKeyboardArrowDown />
          )}
        </button>
      </div>
      {isListNameVisible &&
        listGroup.map((list, index) => (
          <label
            className="menu-list"
            key={list.listId}
            style={{
              position: "absolute",
              top: `${240 + 35 * index}px`,
              display: "flex",
              alignItems: "center",
              height: "35px",
              width: "80%",
              border: "none",
              borderRadius: "20px",
              fontSize: "1rem",
              paddingLeft: "5px",
            }}
          >
            <input
              style={{
                marginRight: "15px",
                padding: "20px",
              }}
              type="checkBox"
              data-list-id={list.listId}
              checked={list.isDisplay}
              onChange={handleListContents}
              disabled={list.isDefault}
            />
            {list.listName}
          </label>
        ))}
    </div>
  );
};
