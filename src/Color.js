import React from 'react'
import {useState, useEffect} from 'react'

const Color = ({h, s, l, i, hslToHex, name}) => {
    const hexToRgb = function(str){
        str = str.slice(1)
        let RgbHex = str.match(/.{1,2}/g);
        return `rgb(${parseInt(RgbHex[0], 16)}, ${parseInt(RgbHex[1], 16)}, ${parseInt(RgbHex[2], 16)})`
    }
    
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 900);
    const [dis, setDis] = useState(name ? name : 'unknowncolor')

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 900);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia); 
    });
    useEffect(() => {
      setDis(name)  
    }, [name])
    const display = () => {
        if(dis == name){
            setDis(hex)
        }else{
            setDis(name)
        }
    }
    const hex = hslToHex(h, s, l).toUpperCase()
    return(
        <div
            className="color-block"
            key={i}
            style={{
                backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
            }}
        >
            <ul className='color-code'>
                <li className='hex'>{hex}</li>
                <li className='rgb'>{hexToRgb(hex)}</li>
                <li value={dis} style={dis == name ? {cursor: 'default'} : null} onClick={isDesktop ? null : display}>{dis}</li>
            </ul>
        </div>
    )
}

export default React.memo(Color)