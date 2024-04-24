import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactItemContainer}>
      <p>👨‍💼{contact.name}</p>
      <p>📞{contact.number}</p>
      <button className={css.btn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
