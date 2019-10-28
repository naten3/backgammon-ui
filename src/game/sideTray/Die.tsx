import React, { useEffect, FC } from "react";
import './die.css'
import { Game } from "../../store/game/types";

interface OwnProps {
  game: Game
}

const PlayerNameBar: FC<OwnProps> = function (props: OwnProps) {
  return (
    <div className="die" >
    </div>
  );
}

export default PlayerNameBar;