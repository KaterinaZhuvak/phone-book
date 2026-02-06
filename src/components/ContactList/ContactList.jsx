import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;

