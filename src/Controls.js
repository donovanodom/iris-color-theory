import React from "react";

const Controls = ({generate}) => {
  return(
    <div className="controls">
      <button onClick = {generate}>generate</button>
    </div>
  )
  
};

export default Controls;
