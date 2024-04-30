import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "../../redux/contactsOps";
import { register } from "../../redux/auth/operations";
import { togglePasswordVisibility } from "../../redux/password/slice";

const registerUserSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Too short!")
    .max(30, "Too long!"),
  email: Yup.string()
    .email("You must enter valid email address!")
    .required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Your password must be more than 7 characters"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit: ", values);
    dispatch(register(values));
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
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2>Register</h2>
          <label className={css.containerField}>
            <span className={css.labelText}>Name</span>

            <Field type="text" name="name" className={css.field} />
            <ErrorMessage component="p" name="name" className={css.error} />
          </label>
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
