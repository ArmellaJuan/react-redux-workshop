import {connect} from 'react-redux';

import {ComponentCompositionExample} from '../components/Examples/ComponentCompositionExample';
import {addUser} from '../actions';

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => {
      dispatch(addUser(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentCompositionExample);
