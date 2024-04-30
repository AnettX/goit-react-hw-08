import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <span>Welcome, {userData.name}</span>
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
