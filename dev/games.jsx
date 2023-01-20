import React from "react";
import {
  Link,
  Switch,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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
        <Route path="/game/:name" element={<GameMatcher />}></Route>
        <Route path="/game/mineSerach" element={<GameMatcher />}></Route>
      </Routes>
    </Router>
  );
};
export default Games;
