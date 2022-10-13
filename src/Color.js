import React from 'react'
import {useState, useEffect} from 'react'

const Color = ({h, s, l, i, hslToHex, name, setCount, count}) => {
    const hexToRgb = function(str){
        str = str.slice(1)
        let RgbHex = str.match(/.{1,2}/g);
        return `rgb(${parseInt(RgbHex[0], 16)}, ${parseInt(RgbHex[1], 16)}, ${parseInt(RgbHex[2], 16)})`
    }
    
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 965);
    const [dis, setDis] = useState(name ? name : 'unknowncolor')
     const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50 
  
  const onTouchStart = (e) => {
    setTouchEnd(null) 
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    const isDownSwipe = distance < -minSwipeDistance
    if (isUpSwipe || isDownSwipe){
      if(count + 1 <= 8 && isUpSwipe){
        setCount(count + 1)
      }else if(count - 1 >= 4 && isDownSwipe){
        setCount(count - 1)
      }
    } 
  }

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 965);
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
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
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