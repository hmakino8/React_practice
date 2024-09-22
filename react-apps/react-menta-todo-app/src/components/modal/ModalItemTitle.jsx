import { PLACEHOLDER } from "../../utils/constants";
import styles from "./ModalItemTitle.module.css";

export const ModalItemTitle = (props) => (
  <div className={styles.container}>
    <input {...props} type="text" placeholder={PLACEHOLDER.TITLE} />
  </div>
);
