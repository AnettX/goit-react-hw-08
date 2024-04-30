import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteContact } from "../../redux/contacts/operations";
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
      {/* <button
        className={css.btn}
        type="button"
        onClick={onDeleteContact}
        startIcon={<DeleteIcon />}
      >
        Delete
      </button> */}
      {/* <Button
        onClick={onDeleteContact}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button> */}
      <IconButton
        aria-label="delete"
        className={css.btn}
        type="button"
        onClick={onDeleteContact}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

export default Contact;
