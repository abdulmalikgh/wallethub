/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type IState = {
  count: number; 
};

class Counter extends React.Component<any,IState> {
  constructor(props:any) {
    super(props);
  }

  state = {
    count: 0
  }

  increment = (input: number) => {
    this.setState((state) => ({
      count: state.count + input,
    }));
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>{this.state.count}</span></p>
        <button id="mainButton" onClick={() =>  this.increment(1)}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);