import React from "react";
import { useParams, useLocation, Route, Routes } from "react-router-dom";

import MineSerach from "./gameComponent/mineSerach";
import LottoGame from "./gameComponent/lottoGameHooks";

function GameMatcher() {
  let params = useParams();
  let location = useLocation();
  console.log(location);
  console.log(params);
  // if (params.name === "mineSerach") {
  //   return <MineSerach />;
  // }
  // if (params.name === "lottoGame") {
  //   return <LottoGame />;
  // } else {
  //   return <div>일치하는 게임 없음</div>;
  // }

  return (
    <Routes>
      <Route path="mineSerach" element={<MineSerach />}></Route>
      <Route path="lottoGame" element={<LottoGame />}></Route>
      <Route path="*" element={<div>일치하는 게임 없음</div>}></Route>
    </Routes>
  );
}

export default GameMatcher;
