const React = require("react");
const ReactDOM = require("react-dom/client");
// const WordChainGame = require("./gameComponent/wordChainGame");
// const NumBaseballGame = require("./gameComponent/numBaseballGame");
// const ReactionSpeedGame = require("./gameComponent/reactionSpeedGameHooks");
// const RSPGame = require("./gameComponent/RSP");
// const RSPGameHooks = require("./gameComponent/RSPHooks");
// const LottoGame = require("./gameComponent/lottoGame");
const LottoGameHooks = require("./gameComponent/lottoGameHooks");
const TictaktocGame = require("./gameComponent/tictaktocGame");
ReactDOM.createRoot(document.querySelector("#root")).render(<TictaktocGame />);

