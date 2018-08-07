import React from 'react';

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className="state-example">
        <span>Count {this.state.count} </span>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default StateComponent;
