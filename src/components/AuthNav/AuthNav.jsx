import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, { [css.active]: isActive });

  return (
    <div className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
