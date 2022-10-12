import React from "react";
import {useState, useEffect } from 'react'
import { FaRedoAlt, FaBars } from "react-icons/fa";

const Controls = ({generate, handleScheme, scheme}) => {
  const [drop, setDrop] = useState(false)
  const handleDrop = (e) => {
    e.preventDefault()
    setDrop(!drop)
  }
  
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 900);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  return(
    <div className="controls">
      <div className='tools'>
        <div  onClick={generate} id='generate'><FaRedoAlt /></div>
        {isDesktop ? 
          (<div name="color scheme" id="color-scheme" onClick={handleDrop}>{scheme}</div>) 
          : (<div className={drop ? 'open' : 'closed'} id='menu' onClick={handleDrop}> 
            <FaBars id='bars'/>
            <button onClick={handleScheme} value='Monochromatic'>MonoChromatic</button>
            <button onClick={handleScheme} value='Analogous'>Analogous</button>
            <button onClick={handleScheme} value='Complementary'>Complementary</button>
            <button onClick={handleScheme} value='Split Complementary'>SplitComplementary</button>
            <button onClick={handleScheme} value='Triadic'>Triadic</button>
            <button onClick={handleScheme} value='Square'>Square</button>
          </div>
          )}
        
      </div>
      {isDesktop ? 
      (<div className={drop ? 'open' : 'closed'} id='menu' onClick={handleDrop}>
        <button onClick={handleScheme} value='Monochromatic'>MonoChromatic</button>
        <button onClick={handleScheme} value='Analogous'>Analogous</button>
        <button onClick={handleScheme} value='Complementary'>Complementary</button>
        <button onClick={handleScheme} value='Split Complementary'>Split Complementary</button>
        <button onClick={handleScheme} value='Triadic'>Triadic</button>
        <button onClick={handleScheme} value='Square'>Square</button>
      </div>) : null}
    </div>
  )
  
};

export default React.memo(Controls);
