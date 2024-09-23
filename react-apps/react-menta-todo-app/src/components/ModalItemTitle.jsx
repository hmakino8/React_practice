import { PLACEHOLDER } from "../utils/constants";
import styles from "./styles/ModalItemTitle.module.css";

export const ModalItemTitle = (props) => (
  <div className={styles.wrapper}>
    <input {...props} type="text" placeholder={PLACEHOLDER.TITLE} />
  </div>
);
