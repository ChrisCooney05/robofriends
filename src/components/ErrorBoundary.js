import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hesError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>O boy....yeah...not good</h1>;
    }
    return this.props.children;
  }
}
//errorboundary is there to display a nicer error for users, it also helps in development to see where the error is

export default ErrorBoundary;
