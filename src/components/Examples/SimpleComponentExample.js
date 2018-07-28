import React from 'react';

class SimpleComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const Sample = () => <SimpleComponent name="Jhon" />;

export default Sample;
