import { connect } from 'react-redux';
import actions from "../../redux/actions";
import ContactsList from './ContactsList';

const getfilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();  

  return (
    contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
  )
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getfilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);