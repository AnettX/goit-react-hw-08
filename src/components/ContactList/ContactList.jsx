import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactListContainer}>
      {filteredContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
