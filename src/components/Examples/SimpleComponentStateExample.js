import React from 'react';

class StateComponent extends React.Component {
  state = {count: 0};

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

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
