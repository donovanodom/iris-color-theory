import React from "react";

const Controls = ({generate, handleCount, count, handleScheme, scheme}) => {
  return(
    <div className="controls">
      <button onClick = {generate}>generate</button>
      <input type='number' min="3" max="20" defaultValue={count} onChange={handleCount}></input>
      <select name="color scheme" id="color-scheme" value={scheme} onChange={handleScheme}>
        <option value="monoChromatic">MonoChromatic</option>
        <option value="analogous">Analogous</option>
        <option value="complementary">Complementary</option>
        <option value="splitComplementary">Split Complementary</option>
        <option value='triadic'>Triadic</option>
       </select>
    </div>
  )
  
};

export default Controls;
