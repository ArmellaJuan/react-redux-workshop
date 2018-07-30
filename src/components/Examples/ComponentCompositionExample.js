import React from 'react';

import UserList from '../UserList';
import UserForm from '../UserForm';
import InnerHeader from '../InnerHeader';
import InnerFooter from '../InnerFooter';

class ComponentCompositionExample extends React.Component {
  render() {
    return (
      <div className="composition-example">
        <InnerHeader />
        <UserList users={this.props.users} />
        <UserForm onSubmit={user => this.props.addUser(user)} />
        <InnerFooter />
      </div>
    );
  }
}

class ComponentCompositionExampleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: [
        {id: 1, username: 'Jhon', email: 'jhon@gmail.com'},
        {id: 2, username: 'David', email: 'david@gmail.com'},
        {id: 3, username: 'Eric', email: 'eric@gmail.com'},
        {id: 4, username: 'Sam', email: 'sam@gmail.com'},
      ],
    });
    /* fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => this.setState({users: data}));*/
  }

  addUser(user) {
    this.setState(prevState => {
      return {users: [...prevState.users, user]};
    });
  }

  render() {
    return <ComponentCompositionExample users={this.state.users} addUser={this.addUser} />;
  }
}

export default ComponentCompositionExampleContainer;
