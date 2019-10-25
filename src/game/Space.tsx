import React, { useEffect, FC } from "react";
import { Triangle, Color } from '../model/game.models'
import { SPACE_HEIGHT, SPACE_WIDTH, PIECE_HEIGHT, PIECE_STACK_COUNT } from './boardDims';
import './space.css'


const spaceStyle = { height: SPACE_HEIGHT, width: SPACE_WIDTH };
const pieceStyle = { height: PIECE_HEIGHT, width: PIECE_HEIGHT };

interface OwnProps {
  space: Triangle
  index: number
}

const Space: FC<OwnProps> = function (props: OwnProps) {
  const colorClass = props.index % 2 == 0 ? 'dark' : 'light'

  function getPieces() {
    const pieceColorClass = props.space.color === Color.Black ? 'black' : 'white'
    if (props.space.color !== Color.None) {
      return Array(props.space.count).fill(0).map((unused, index) => getPiece(index, pieceColorClass))
    }
  }

  function getPiece(index: number, pieceColorClass: string) {
    const pieceWrapperStyle = { top: getTopOffset(index), width: SPACE_WIDTH }
    return (
      <div key={index} className="pieceWrapper" style={pieceWrapperStyle}>
        <div className={`piece ${pieceColorClass}`} style={pieceStyle} >
        </div >
      </div>
    )
  }

  return (
    <div className="space" style={spaceStyle} >
      <div className={`triangle ${colorClass}`}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 50,100 100,0"></polygon>
        </svg>
      </div>
      <div className="pieces">
        {getPieces()}
      </div>
    </div>
  );
}

function getTopOffset(pieceIndex: number): number {
  if (pieceIndex < PIECE_STACK_COUNT) {
    return pieceIndex * PIECE_HEIGHT;
  } else {
    // how many in current layer
    const layerIndex = pieceIndex - PIECE_STACK_COUNT;
    return layerIndex * PIECE_HEIGHT + PIECE_HEIGHT / 2
  }
}

export default Space;