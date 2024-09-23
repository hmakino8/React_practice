import { PLACEHOLDER } from "../utils/constants";
import styles from "./styles/ModalItemComment.module.css";

export const ModalItemComment = (props) => (
  <div className={styles.wrapper}>
    <textarea {...props} placeholder={PLACEHOLDER.COMMENT} />
  </div>
);
