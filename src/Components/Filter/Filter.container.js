import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = distatch => ({
  handleChange: (event) =>
    distatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);