import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeContact = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <section className={css.sectionSearchBox}>
      <p>Find contacts by name or number</p>
      <input
        type="text"
        onChange={onChangeContact}
        value={filter}
        className={css.inputForSearch}
      />
    </section>
  );
};

export default SearchBox;
