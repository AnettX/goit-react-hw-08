import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { togglePasswordVisibility } from "../../redux/password/slice";

const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("You must enter valid email address!")
    .required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Your password must be more than 7 characters"),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit: ", values);
    dispatch(logIn(values));
    actions.resetForm();
  };

  //about password visibility
  const showPassword = useSelector((state) => state.password.showPassword);
  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2>Log in</h2>
          <label className={css.containerField}>
            <span className={css.labelText}>Email</span>

            <Field type="email" name="email" className={css.field} />
            <ErrorMessage component="p" name="email" className={css.error} />
          </label>

          <label className={css.containerField}>
            <div className={css.containerPasswordField}>
              <span className={css.labelText}>Password</span>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className={css.field}
                placeholder="Enter your password"
              />
              <span
                onClick={handleTogglePassword}
                className={css.passwordToggle}
              >
                {showPassword ? "🙊" : "🙈"}
              </span>
            </div>
            <ErrorMessage component="p" name="password" className={css.error} />
          </label>

          <button type="submit" className={css.btn}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
