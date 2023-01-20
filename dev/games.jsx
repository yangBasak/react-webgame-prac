import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import GameMatcher from "./gameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/game/mine-serach">마인</Link>
        <Link to="/game/lottoGame">로또</Link>
        <Link to="/game/numBaseballGame">야구게임</Link>
        <Link to="/game/RSPGame">가위바위보</Link>
        <Link to="/game/reactionSpeedGame">반응속도</Link>
        <Link to="/game/tictaktocGame">틱택토</Link>
        <Link to="/game/wordChainGame">끝말잇기</Link>
        <Link to="/game/index">nothing</Link>
      </nav>
      <Routes>
        <Route path="/game/*" element={<GameMatcher />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Games;
