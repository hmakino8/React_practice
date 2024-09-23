import { PULLDOWN } from "../utils/constants";
import styles from "./styles/ModalItemListName.module.css";

export const ModalItemListName = (props) => {
  const { modalData, setModalData, listGroup } = props;

  const listNameAlreadySet = listGroup.map((list) =>
    list.listId === modalData.listId ? list.listName : ""
  );

  return (
    <div className={styles.wrapper}>
      <select
        name={"listId"}
        onChange={(e) =>
          setModalData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      >
        {modalData.listId ? (
          <option value={modalData.listId}>{listNameAlreadySet}</option>
        ) : (
          <option value="">{PULLDOWN.CHOOSE_LIST_NAME}</option>
        )}
        {listGroup.map(
          (list) =>
            list.listId !== modalData.listId && (
              <option value={list.listId} key={list.listId}>
                {list.listName}
              </option>
            )
        )}
      </select>
    </div>
  );
};
