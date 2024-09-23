import styles from "./styles/ButtonToggleMenuBar.module.css";

export const ButtonToggleMenuBar = ({ setIsMenuOpen }) => (
  <button
    onClick={() => setIsMenuOpen((prev) => !prev)}
    className={styles.wrapper}
  >
    <span className="material-symbols-outlined">menu</span>
  </button>
);
