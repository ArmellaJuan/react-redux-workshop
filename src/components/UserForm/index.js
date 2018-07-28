import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      id: Math.random(),
      username: this.state.username,
      email: this.state.email,
    });
    this.setState({
      username: '',
      email: '',
    });
  }

  render() {
    return (
      <div className="user-form">
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br />
          <label>Email: </label>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
