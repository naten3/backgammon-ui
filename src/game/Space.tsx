import React, { useEffect, FC } from "react";
import {Triangle} from '../model/game.models'
import './space.css'

interface OwnProps {
  space: Triangle
  index: number
}

const Space: FC<OwnProps> = function(props: OwnProps) {
  const colorClass = props.index % 2 == 0 ? 'dark' : 'light'
  return (
    <div className={`space ${colorClass}`}>
<svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon points="0,0 50,100 100,0"></polygon>
</svg>
    </div>
  );
}

export default Space;