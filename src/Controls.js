import React from "react";
import { FaExchangeAlt, FaEllipsisH, FaCaretUp, FaCaretDown } from "react-icons/fa";

const Controls = ({generate, handleUpCount, handleDownCount,count, handleScheme, scheme}) => {
  return(
    <div className="controls">
      <div className='tools'>
        <div>Tools</div>
        <div  onClick = {generate}><FaExchangeAlt className='icons'/></div>
        
        <div><FaEllipsisH className='icons'/></div>
        
        <div className='count-box'>
          <button onClick={handleUpCount} id='up-arrow'><FaCaretUp /></button>
          <div>{count}</div>
          <button onClick={handleDownCount} id='down-arrow'><FaCaretDown /></button>
        </div>
        <select name="color scheme" id="color-scheme" value={scheme} onChange={handleScheme}>
          <option value="monoChromatic">MonoChromatic</option>
          <option value="analogous">Analogous</option>
          <option value="complementary">Complementary</option>
          <option value="splitComplementary">Split Complementary</option>
          <option value='triadic'>Triadic</option>
          <option value='square'>Square</option>
        </select>
       </div>
    </div>
  )
  
};

export default Controls;
