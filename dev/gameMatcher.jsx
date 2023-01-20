import React from "react";
import { useParams, useLocation } from "react-router-dom";

import MineSerach from "./gameComponent/mineSerach";
import LottoGame from "./gameComponent/lottoGameHooks";

function GameMatcher() {
  let params = useParams();
  let location = useLocation();

  if (params.name === "mineSerach") {
    return <MineSerach />;
  }
  if (params.name === "lottoGame") {
    return <LottoGame />;
  } else {
    return <div>일치하는 게임 없음</div>;
  }
}

export default GameMatcher;
