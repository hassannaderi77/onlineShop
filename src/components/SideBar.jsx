import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import {categories} from "../constants/list.js"

import styles from "./SideBar.module.css"


function SideBar({setQuery, query}) {

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
    // category:category = category
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li className={query.category == item.type.toLocaleLowerCase() ? styles.selected : null} key={item.id}>{item.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
