import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  // this function is part of react so we do not need to use arrow function
  // 'this' will be available
  //usually where HTTP calls or backend stuff would happen like AJAX
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.title,
          body: data.body,
        });
        console.log("testing!!");
      });

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  //   UNSAFE_componentWillMount() {
  //     console.log("componentWillMount...");
  //   }

  //   // this will be ran everytime a component has changed such as the state changing values
  //   componentDidUpdate() {
  //     console.log("componentDidMount...");
  //   }

  //   UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillRecieveProps...");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return {
  //       test: "Something", // changes the state
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBEforeUpdate");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{this.props.testProp}</h3>
      </div>
    );
  }
}

export default Test;
