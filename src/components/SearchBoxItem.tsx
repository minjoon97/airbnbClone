import styles from "../style/SearchBoxItem.module.css";
import { Dispatch, SetStateAction, useState, useRef } from "react";

interface SearchBoxItemProps {
  searchState: string;
  setactiveState: Dispatch<SetStateAction<boolean>>;
}

const SearchBoxItem: React.FC<SearchBoxItemProps> = ({
  searchState,
  setactiveState,
}) => {
  const [SearchBoxItemState, setSearchBoxItemState] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li
      className={`
      ${styles.itemContainer} 
      ${searchState === "체험" ? styles.visible : ""} 
      ${SearchBoxItemState === true ? styles.active : ""}
    `}
      onClick={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <p>체크인</p>
      <input
        type="text"
        placeholder="날짜 추가"
        ref={inputRef}
        onFocus={() => {
          setactiveState(true);
          setSearchBoxItemState(true);
        }}
        onBlur={() => {
          setactiveState(false);
          setSearchBoxItemState(false);
        }}
      ></input>
    </li>
  );
};

export default SearchBoxItem;
