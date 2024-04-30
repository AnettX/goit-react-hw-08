import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <span className={css.userWelcomeName}>Welcome, {userData.name}</span>
      <button onClick={onLogout} type="button" className={css.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
