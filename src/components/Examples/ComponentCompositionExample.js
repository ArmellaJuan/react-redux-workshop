import React from 'react';

import UserList from '../UserList';
import UserForm from '../UserForm';

const Header = () => <div className="sample-header">Header</div>;

const Footer = () => <div className="sample-footer">Footer</div>;

class ComponentCompositionExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
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
    return (
      <div className="composition-sample">
        <Header />
        <UserList users={this.state.users} />
        <UserForm onSubmit={user => this.addUser(user)} />
        <Footer />
      </div>
    );
  }
}

export default ComponentCompositionExample;
