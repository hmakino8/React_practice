import { useState } from "react";
import { Header } from "./layout/Header";
import { Body } from "./layout/Body";
import styles from "./styles/App.module.css";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className={styles.container}>
      <Header
        setIsMenuOpen={setIsMenuOpen}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
      <Body isMenuOpen={isMenuOpen} searchKey={searchKey} />
    </div>
  );
};
