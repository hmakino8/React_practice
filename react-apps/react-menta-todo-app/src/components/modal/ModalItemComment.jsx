import { PLACEHOLDER } from "../../utils/constants";
import styles from "./ModalItemComment.module.css";

export const ModalItemComment = (props) => (
  <div className={styles.container}>
    <textarea {...props} placeholder={PLACEHOLDER.COMMENT} />
  </div>
);
