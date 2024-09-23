import { PLACEHOLDER } from "../utils/constants";
import styles from "./styles/SearchBar.module.css";

export const SearchBar = ({ searchKey, setSearchKey }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>
      <span className="material-symbols-outlined">search</span>
      <input
        value={searchKey}
        placeholder={PLACEHOLDER.SEARCH_TASK}
        onChange={(e) => setSearchKey(e.target.value)}
        className={styles.inputSearchBar}
      />
    </label>
  </div>
);
