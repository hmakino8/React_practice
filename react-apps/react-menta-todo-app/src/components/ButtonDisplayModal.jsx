import styles from "./styles/ButtonDisplayModal.module.css";
import { LABEL } from "../utils/constants";

export const ButtonDisplayModal = ({ setIsModalOpen }) => (
  <button className={styles.wrapper} onClick={() => setIsModalOpen(true)}>
    <div className={styles.invisible1}></div>
    <div className={styles.invisible2}></div>
    <div className={styles.invisible3}></div>
    <div className={styles.invisible4}></div>
    <div className={styles.invisible5}></div>
    <div className={styles.invisible6}></div>
    <div className={styles.invisible7}></div>
    <div className={styles.invisible8}></div>
    <div className={styles.invisible9}></div>
    <div className={styles.iconColor}></div>
    <p className={styles.label}>{LABEL.ADD_TASK_TO_LIST}</p>
  </button>
);
