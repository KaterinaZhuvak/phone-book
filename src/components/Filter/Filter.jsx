import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filterActions";

import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <input
      className={styles.input}
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Find contacts"
    />
  );
};

export default Filter;

