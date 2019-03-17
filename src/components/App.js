import React, { Component } from "react";

//React.createElemen
const Hello1 = <h1>Hello world1!</h1>;

const Hello2 = React.createElement(
  "h2",
  { className: "title2" },
  "Hello World2!"
);
//functional component
function Hello3() {
  return (
    <div>
      <h3>Hello World3!</h3>
    </div>
  );
}
//React.PureComponent.
class Message extends React.PureComponent {
  render() {
    return <h4> {this.props.title}</h4>;
  }
}
//React.Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      className: "App"
    };
  }
  render() {
    return (
      <div className={this.state.className}>
        {Hello1}
        {Hello2}
        <Hello3 />
        <Message title="Hello World4!" />
        <h5>Hello, {this.props.name}!</h5>
      </div>
    );
  }
}


export default App;