import { useState } from "react";
import HeaderMain from "../components/HeaderMain.tsx";
import HeaderSearch from "../components/HeaderSearch.tsx";
import styles from "../style/Header.module.css";

function Header() {
  const [searchState, setSearchState] = useState("숙소");

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderMain
          searchState={searchState}
          setSearchState={setSearchState}
        ></HeaderMain>
        <HeaderSearch searchState={searchState}></HeaderSearch>
      </div>
    </div>
  );
}

export default Header;
