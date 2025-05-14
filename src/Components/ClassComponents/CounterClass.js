import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Class Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default CounterClass;