import styles from "../style/PopulationItem.module.css";
import { Dispatch, SetStateAction, useState, useRef } from "react";

interface PopulationItemProps {
  searchState: string;
  setactiveState: Dispatch<SetStateAction<boolean>>;
}

const PopulationItem: React.FC<PopulationItemProps> = ({
  searchState,
  setactiveState,
}) => {
  const [PopulationItemState, setPopulationItemState] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li
      className={`
      ${styles.itemContainer} 
      ${searchState === "체험" ? styles.visible : ""} 
      ${PopulationItemState === true ? styles.active : ""}
    `}
      onClick={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <p>여행자</p>
      <input
        type="text"
        placeholder="게스트 추가"
        ref={inputRef}
        onFocus={() => {
          setactiveState(true);
          setPopulationItemState(true);
        }}
        onBlur={() => {
          setactiveState(false);
          setPopulationItemState(false);
        }}
      ></input>
    </li>
  );
};

export default PopulationItem;
