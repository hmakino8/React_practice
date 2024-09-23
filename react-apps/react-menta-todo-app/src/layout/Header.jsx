import { ButtonToggleMenuBar } from "../components/ButtonToggleMenuBar";
import { TodleTitle } from "../components/TodleTitle";
import { SearchBar } from "../components/SearchBar";
import styles from "./styles/Header.module.css";

export const Header = (props) => {
  const { setIsMenuOpen, searchKey, setSearchKey } = props;

  return (
    <div className={styles.container}>
      <ButtonToggleMenuBar setIsMenuOpen={setIsMenuOpen} />
      <TodleTitle />
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
    </div>
  );
};
