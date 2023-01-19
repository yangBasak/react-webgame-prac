import React from "react";
import { useParams } from "react-router-dom";

import MineSerach from "./gameComponent/mineSerach";
import LottoGame from "./gameComponent/lottoGameHooks";

function GameMatcher() {
  let params = useParams();

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
