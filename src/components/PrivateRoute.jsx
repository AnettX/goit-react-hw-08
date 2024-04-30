import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const showRedirect = !isLoggedIn && !isRefreshing;

  return !isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

export default PrivateRoute;
