import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameMatcher from "./gameMatcher";
import MineSerach from "./gameComponent/mineSerach";
import LottoGame from "./gameComponent/lottoGameHooks";

const Games = () => {
  return (
    <Router>
      <div>
        <Link to="/game/mineSerach">마인</Link>
        <Link to="/game/lottoGame">로또</Link>
        <Link to="/game/index">게임매처</Link>
      </div>
      <Routes>
        {/* <Route path="/mineSerach" element={<MineSerach />}></Route>
        <Route path="/lottoGame" element={<LottoGame />}></Route> */}
        <Route path="/game/:name" element={<GameMatcher />}></Route>
      </Routes>
    </Router>
  );
};
export default Games;
