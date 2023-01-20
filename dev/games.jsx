import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import GameMatcher from "./gameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/mineSerach">마인</Link>
        <Link to="/game/lottoGame">로또</Link>
        <Link to="/game/index">게임매처</Link>
      </div>
      <Routes>
        <Route path="/game/:name/*" element={<GameMatcher />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Games;
