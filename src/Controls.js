import React from "react";
import { FaRedoAlt } from "react-icons/fa";

const Controls = ({generate, handleScheme, scheme, drop, handleDrop}) => {
  return(
    <div className="controls">
      <div className='tools'>
        <div  onClick={generate} id='generate'><FaRedoAlt /></div>
        <div name="color scheme" id="color-scheme" onClick={handleDrop}>{scheme}</div>
      </div>
      <div className={drop ? 'open' : 'closed'} id='menu' onClick={handleDrop}>
        <button onClick={handleScheme}value='Monochromatic'>MonoChromatic</button>
        <button onClick={handleScheme}value='Analogous'>Analogous</button>
        <button onClick={handleScheme}value='Complementary'>Complementary</button>
        <button onClick={handleScheme}value='Split Complementary'>Split Complementary</button>
        <button onClick={handleScheme}value='Triadic'>Triadic</button>
        <button onClick={handleScheme}value='Square'>Square</button>
      </div>
    </div>
  )
  
};

export default Controls;
