const React = require("react");
const { Component } = React;

class WordChainGame extends Component {
  state = {
    text: "hi",
  };
  render() {
    return <div>{this.state.text}</div>;
  }
}

module.exports = WordChainGame;
