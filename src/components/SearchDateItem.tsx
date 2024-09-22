import styles from "../style/SearchDateItem.module.css";
import { Dispatch, SetStateAction, useState, useRef } from "react";

interface SearchDateItemProps {
  searchState: string;
  setactiveState: Dispatch<SetStateAction<boolean>>;
}

const SearchDateItem: React.FC<SearchDateItemProps> = ({
  searchState,
  setactiveState,
}) => {
  const [SearchDateItemState, setSearchDateItemState] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li
      className={`
      ${styles.itemContainer} 
      ${searchState === "숙소" ? styles.visible : ""} 
      ${SearchDateItemState === true ? styles.active : ""}
      `}
      onClick={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <p>날짜</p>
      <input
        type="text"
        placeholder="날짜 추가"
        ref={inputRef}
        onFocus={() => {
          setactiveState(true);
          setSearchDateItemState(true);
        }}
        onBlur={() => {
          setactiveState(false);
          setSearchDateItemState(false);
        }}
      ></input>
    </li>
  );
};

export default SearchDateItem;
