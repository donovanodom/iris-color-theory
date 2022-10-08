import React from "react";
import { FaRedoAlt } from "react-icons/fa";

const Controls = ({generate, handleScheme, scheme, drop, handleDrop}) => {
  return(
    <div className="controls">
      <div className='tools'>
        <div  onClick = {generate}><FaRedoAlt className='icons'/></div>
        <div name="color scheme" id="color-scheme" onClick={handleDrop}>{scheme}</div>
      </div>
      <div className={drop ? 'open' : 'closed'} id='menu'>
        {scheme = 'Monochromatic' ? null : <div onCLick={handleScheme('Monochromatic')} >MonoChromatic</div>}
        {scheme = 'Analogous' ? null : <div onCLick={handleScheme('Analogous')}>Analogous</div>}
        {scheme = 'Complementary' ? null : <div onCLick={handleScheme('Complementary')}>Complementary</div>}
        {scheme = 'Split Complementary' ? null : <div onCLick={handleScheme('Split Complementary')}>Split Complementary</div>}
        {scheme = 'Triadic' ? null : <div onCLick={handleScheme('Triadic')}>Triadic</div>}
        {scheme = 'Square' ? null : <div onCLick={handleScheme('Square')}>Square</div>}
      </div>
    </div>
  )
  
};

export default Controls;
