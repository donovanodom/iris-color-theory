import React from "react";

const Controls = ({generate, handleCount, count}) => {
  return(
    <div className="controls">
      <button onClick = {generate}>generate</button>
      <input type='number' min="3" max="20" defaultValue={count} onChange={handleCount}></input>
    </div>
  )
  
};

export default Controls;
