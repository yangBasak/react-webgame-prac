const React = require("react");
const { Component } = React;

class WordChainGame extends Component {
  state = {
    word: "영양",
    value: "",
    result: "",
  };
  onSubmitFrom = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "ㅇㅋ",
        word: this.state.value,
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "ㄴㄴ",
        value: "",
      });
    }
  };
  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };
  input;

  onRefInput = (c) => {
    this.input = c;
  };
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitFrom}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          {/* <input
            ref={this.onRefInput}
            defaultValue={this.state.value}
          /> */}
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordChainGame;
