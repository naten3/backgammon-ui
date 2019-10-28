import React, { useEffect, FC } from "react";
import { Triangle, Color } from '../../model/game.models'
import './playerNameBar.css'

interface OwnProps {
  displayName: string
}

const PlayerNameBar: FC<OwnProps> = function (props: OwnProps) {
  return (
    <div className="player-name-bar" >
      <div className="name-icon">
        <span role="img" aria-label="silhouette">👤</span>
      </div>
      <div className="display-name">
        <h3>{props.displayName}</h3>
      </div>
    </div>
  );
}

export default PlayerNameBar;