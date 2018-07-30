import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => {
      console.log(user);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
