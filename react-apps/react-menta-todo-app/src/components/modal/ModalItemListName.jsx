import styles from "./ModalItemListName.module.css";
import { PULLDOWN } from "../../utils/constants";

export const ModalItemListName = (props) => {
  const { modalData, setModalData, listGroup } = props;

  const listNameAlreadySet = listGroup.map((list) =>
    list.listId === modalData.listId ? list.listName : ""
  );

  return (
    <div className={styles.container}>
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
