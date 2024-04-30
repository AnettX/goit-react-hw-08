import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const contactsSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required")
    .matches(/^[0-9-]+$/, "That doesn't look like a phone number")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (formData) => {
    dispatch(addContact(formData));
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.containerField}>
          <span className={css.labelText}>Name</span>

          <Field type="text" name="name" className={css.field} />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>

        <label className={css.containerField}>
          <span className={css.labelText}>Number</span>

          <Field type="tel" name="number" className={css.field} />
          <ErrorMessage component="p" name="number" className={css.error} />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
