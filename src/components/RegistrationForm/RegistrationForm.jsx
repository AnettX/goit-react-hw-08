import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import usePasswordVisibilityToggle from "../../hooks/usePasswordVisibilityToggle";

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

  const [showPassword, setShowPassword] = usePasswordVisibilityToggle();

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

            <Field
              type="text"
              name="name"
              className={css.field}
              placeholder="Enter your name"
            />
            <ErrorMessage component="p" name="name" className={css.error} />
          </label>
          <label className={css.containerField}>
            <span className={css.labelText}>Email</span>

            <Field
              type="email"
              name="email"
              className={css.field}
              placeholder="Enter your email"
            />

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
              <span onClick={setShowPassword} className={css.passwordToggle}>
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
