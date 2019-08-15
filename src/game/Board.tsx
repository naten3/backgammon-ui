import React, { useEffect, ReactElement, FC } from "react";
import Space from './Space'
import {Board} from '../model/game.models'
import './board.css'

interface OwnProps {
  board: Board;
}

const BoardComponent: FC<OwnProps> =  function(props: OwnProps): ReactElement<OwnProps> {
  const spaces = props.board.spaces.map((space, index)=> ({
    index: index,
    space: space
  }));

  const topLeftSpaces = spaces.slice(6,12).reverse();
  const topRigthSpaces = spaces.slice(0,6).reverse();
  const bottomLeftSpaces = spaces.slice(12,18);
  const bottomRightSpaces = spaces.slice(18);

  return (
    <div className="wrapper">
    <div className="frame">
      <div className="left half">
        <div className="top quarter">
        {topLeftSpaces.map(space => <Space space={space.space} index={space.index}/>)}
        </div>
        <div className="bottom quarter">
        {bottomLeftSpaces.map(space => <Space space={space.space} index={space.index}/>)}
        </div>
      </div>
      <div className="right half">
        <div className="top quarter">
        {topRigthSpaces.map(space => <Space space={space.space} index={space.index}/>)}
          </div>
          <div className="bottom quarter">
          {bottomRightSpaces.map(space => <Space space={space.space} index={space.index}/>)}
        </div>
      </div>
    </div>
    </div>
  );
}
export default BoardComponent;