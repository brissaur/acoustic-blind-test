// import * as React from "react";
// import { render } from "react-dom";
import { Container } from "unstated";

type CounterState = {
  count: number;
};

export default class UnstateContainer extends Container<CounterState> {
  state = {
    count: 0
  };

  constructor() {
    super();
    console.log("constructor");
    this.increment.bind(this);
    this.decrement.bind(this);
  }

  increment() {
    console.log("increment", this);
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}
