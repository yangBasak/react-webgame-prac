const React = require("react");
const ReactDOM = require("react-dom/client");
// const WordChainGame = require("./gameComponent/wordChainGame");
// const NumBaseballGame = require("./gameComponent/numBaseballGame");
const ReactionSpeedGame = require("./gameComponent/reactionSpeedGameHooks");
ReactDOM.createRoot(document.querySelector("#root")).render(<ReactionSpeedGame />);
