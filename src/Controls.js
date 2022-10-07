import React from "react";
import { GrCycle } from "react-icons/gr";

const Controls = ({generate, handleCount, count, handleScheme, scheme}) => {
  return(
    <div className="controls">
      <div>Tools</div>
      <div id='generate' onClick = {generate}><GrCycle/></div>
      <input type='number' min="4" max="20" defaultValue={count} onChange={handleCount}></input>
      <select name="color scheme" id="color-scheme" value={scheme} onChange={handleScheme}>
        <option value="monoChromatic">MonoChromatic</option>
        <option value="analogous">Analogous</option>
        <option value="complementary">Complementary</option>
        <option value="splitComplementary">Split Complementary</option>
        <option value='triadic'>Triadic</option>
        <option value='square'>Square</option>
       </select>
    </div>
  )
  
};

export default Controls;
