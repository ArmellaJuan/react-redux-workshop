import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: props.seconds};
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Updated');
    console.log('State', prevState, this.state);
  }

  componentDidMount() {
    console.log('Component Mounted');
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }));
  }

  render() {
    console.log('Render');
    return (
      <div>
        <span>{this.state.seconds}</span>
        <span> seconds</span>
      </div>
    );
  }
}

class LifeHooksExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shouldRenderTimer: true};
    this.handleCloseTimer = this.handleCloseTimer.bind(this);
  }

  handleCloseTimer() {
    this.setState({shouldRenderTimer: false});
  }

  render() {
    const {shouldRenderTimer} = this.state;
    return (
      <div>
        {shouldRenderTimer && <Timer seconds={10} />}
        <button onClick={this.handleCloseTimer}>Close Timer</button>
      </div>
    );
  }
}

export default LifeHooksExample;
