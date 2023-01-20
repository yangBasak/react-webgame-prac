import React from "react";
import { useParams, useLocation, Route, Routes } from "react-router-dom";

import MineSerach from "./gameComponent/mineSerach";
import LottoGame from "./gameComponent/lottoGameHooks";
import NumBaseballGame from "./gameComponent/numBaseballGameHooks";
import ReactionSpeedGame from "./gameComponent/reactionSpeedGameHooks";
import RSPGame from "./gameComponent/RSPHooks";
import TictaktocGame from "./gameComponent/tictaktocGame";
import WordChainGame from "./gameComponent/wordChainGame";

function GameMatcher() {
  return (
    <Routes>
      <Route path="mine-serach" element={<MineSerach />}></Route>
      <Route path="lottoGame" element={<LottoGame />}></Route>
      <Route path="numBaseballGame" element={<NumBaseballGame />}></Route>
      <Route path="reactionSpeedGame" element={<ReactionSpeedGame />}></Route>
      <Route path="RSPGame" element={<RSPGame />}></Route>
      <Route path="tictaktocGame" element={<TictaktocGame />}></Route>
      <Route path="wordChainGame" element={<WordChainGame />}></Route>
      <Route path="*" element={<div>일치하는 게임 없음</div>}></Route>
    </Routes>
  );
}

export default GameMatcher;
