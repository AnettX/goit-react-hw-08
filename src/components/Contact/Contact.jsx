import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import css from "./Contact.module.css";
import { useState } from "react";
import ConfirmModal from "../ConfirmModal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className={css.contactItemContainer}>
      <p>👨‍💼{contact.name}</p>
      <p>📞{contact.number}</p>
      <IconButton
        aria-label="delete"
        className={css.btn}
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        <DeleteIcon />
      </IconButton>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={onDeleteContact}
      />
    </li>
  );
};

export default Contact;
