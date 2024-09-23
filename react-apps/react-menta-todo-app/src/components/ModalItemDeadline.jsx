import { PLACEHOLDER } from "../utils/constants";
import styles from "./styles/ModalItemDeadline.module.css";

export const ModalItemDeadline = (props) => (
  <div className={styles.wrapper}>
    <label htmlFor="datetime">{PLACEHOLDER.DEADLINE}</label>
    <input {...props} type="datetime-local" id="datetime" />
  </div>
);
