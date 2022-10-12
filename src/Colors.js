import React from "react";
import { useState, useEffect } from "react";
import Controls from "./Controls";
import Color from './Color';
import Instructions from './Instructions'
import Logo from './Logo'


const Colors = () => {
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const namer = require('color-namer')

  const [scheme, setScheme] = useState("Monochromatic");
  const [count, setCount] = useState(4);
  const [base, setBase] = useState(
    [randomNumber(0, 359), randomNumber(20, 80), randomNumber(20, 80)],
  );
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  const shuffleOrder = (arr) => {
    let shuffled = [], left = randomNumber(0,arr.length - 1), right = left + 1
    while(left >= 0 || right < arr.length){
      if(left >= 0){
        shuffled.push(arr[left])
        left--
      }
      if(right < arr.length){
        shuffled.push(arr[right])
        right++
      }
    }
    return shuffled
  }
  
  const monoChromatic = (base, count) => {
    let i = 0, arr = [], piv = [...base]
    while(i < count){
      let s = randomNumber(-20,-1), l = randomNumber(-20,-1)
      piv[1] = piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s
      piv[2] = piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l
      arr.push([piv[0], piv[1], piv[2]])
      i++
    }
    return shuffleOrder(arr)
  }
  
  const analogous = (base, count) => {
    let i = 0, j = 0, arr = [], piv = [...base], shift = [0,-35,-70,35,70]
    
    while(i < count){
      let s = randomNumber(-20,-1), l = randomNumber(-20,-1)
      piv[1] = piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s
      piv[2] = piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l
      if(j >= 5) j = 0
      arr.push([piv[0] + shift[j] < 0 ? piv[0] - shift[j] + 360 : piv[0] + shift[j] > 359 ? piv[0] + shift[j] - 360 : piv[0] + shift[j], piv[1], piv[2]])
      i++
      j++
    }
    return shuffleOrder(arr)
  }
  
  const complementary = (base, count) => {
    let i = 0, arr = [], piv = [...base], comp = piv[0] - 180 < 0 ? 360 + piv[0] - 180 : piv[0] - 180
    while(i < count){
      if(i % 2 == 0){
        let s = randomNumber(-20,-1), l = randomNumber(-20,-1)
        piv[1] = piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s
        piv[2] = piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l
        arr.push([piv[0], piv[1], piv[2]])
      }else{
        let s = randomNumber(-20,-1), l = randomNumber(-20,-1)
        arr.push([comp, piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s, piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l])
      }
      i++
    }
    return shuffleOrder(arr)
  }
  
  const splitComplementary = (base, count) => {
    let i = 0, arr = [], piv = [...base], comp = piv[0] - 180 < 0 ? 360 + piv[0] - 180 : piv[0] - 180
    while(i < count){
      if(i % 2 == 0){
        arr.push([piv[0], piv[1], piv[2]])
      }else{
        arr.push([comp, piv[1], piv[2]])
        let s = randomNumber(-50,-30), l = randomNumber(-50,-30)
        piv[1] = piv[1] + s < 20 ? randomNumber(50,95) : piv[1] + s
        piv[2] = piv[2] + l < 20 ? randomNumber(50,95) : piv[2] + l
      }
      i++
    }
    return shuffleOrder(arr)
  }
  
  const triadic = (base, count) => {
    let 
      i = 0, 
      j = 0,
      arr = [], 
      piv = [...base], 
      t1 = piv[0] - 120 < 0 ? 360 + piv[0] - 120 : piv[0] - 120, 
      t2 = t1 - 120 < 0 ? 360 + t1 - 120 : t1 - 120, 
      triad = ['first','second','third']
    while(i < count){
      if(j > 2) j = 0
      if(triad[j] == 'first'){
        arr.push([piv[0], piv[1], piv[2]])
      }else if(triad[j] == 'second'){
        let s = randomNumber(-20,1), l = randomNumber(-20,1)
        arr.push([t1, piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s, piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l])
      }else if(triad[j] == 'third'){
        let s = randomNumber(-20,1), l = randomNumber(-20,1)
        arr.push([t2, piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s, piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l])
        piv[1] = piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s
        piv[2] = piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l
      }
      i++
      j++
    }
    return shuffleOrder(arr)
  }
  
  const square = (base, count) => {
    let 
      i = 0, 
      j = 0,
      arr = [], 
      piv = [...base], 
      t1 = piv[0] - 90 < 0 ? 360 + piv[0] - 90 : piv[0] - 90, 
      t2 = t1 - 90 < 0 ? 360 + t1 - 90 : t1 - 90, 
      t3 = t2 - 90 < 0 ? 360 + t2 - 90 : t2 - 90, 
      square = ['first','second','third','fourth']
    while(i < count){
      if(j > 3) j = 0
      if(square[j] == 'first'){
        arr.push([piv[0], piv[1], piv[2]])
      }else if(square[j] == 'second'){
        let s = randomNumber(-20,1), l = randomNumber(-20,1)
        arr.push([t1, piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s, piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l])
      }else if(square[j] == 'third'){
        let s = randomNumber(-20,1), l = randomNumber(-20,1)
        arr.push([t2, piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s, piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l])
      }else if(square[j] == 'fourth'){
        let s = randomNumber(-20,1), l = randomNumber(-20,1)
        arr.push([t3, piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s, piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l])
        piv[1] = piv[1] + s < 20 ? randomNumber(20,95) : piv[1] + s
        piv[2] = piv[2] + l < 20 ? randomNumber(20,95) : piv[2] + l
      }
      i++
      j++
    }
    return shuffleOrder(arr)
  }
  
  const schemes = {
    'Monochromatic': monoChromatic,
    'Analogous': analogous,
    'Complementary': complementary,
    'Split Complementary': splitComplementary,
    'Triadic': triadic,
    'Square': square
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const generate = () => {
    setBase([randomNumber(0, 360), randomNumber(20, 80), randomNumber(20, 80)]);
  };
    
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        generate()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  function handleWheel(e) {
    if(count + 1 <= 8 && e.deltaY < 0){
      setCount(count + 1)
    }else if(count - 1 >= 4 && e.deltaY > 0){
      setCount(count - 1)
    }
  }
  
  const minSwipeDistance = 50 
  
  const onTouchStart = (e) => {
    setTouchEnd(null) 
    setTouchStart(e.targetTouches[0].clientY)
  }
  
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)
  
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
  

  
  const handleScheme = (e) => {
    e.preventDefault()
    setScheme(e.target.value)
  }
  


  return (
    <div className="colors">
      <Logo />
      
      <div className="color-blocks" onWheel={handleWheel} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {schemes[scheme](base, count).map(([h, s, l], i) => (
          <Color 
            name={namer(hslToHex(h,s,l),{pick: ['ntc'], distance: 'deltaE'})['ntc'][0]['name']}
            key={i}
            h={h}
            s={s}
            l={l}
            i={i}
            hslToHex={hslToHex}
          />
        ))}
        <Controls generate={generate} handleScheme={handleScheme} scheme={scheme} />
        <Instructions />
      </div>
    </div>
  );
};

export default Colors;

// MonoChromatic - Same color, varying shades
// Analogous - One main color, two adjacent colors
// Complementary - Two colors directly across
// Split Complementary

// Triadic - 3 equally spaced colors
// #AABBCC #CCAABB #BBCCAA
// rgb(AAA, BBB, CCC) rgb(CCC, AAA, BBB) rgb(BBB, CCC, AAA)

// Tetradic - Rectangle, similar to square
//

// Square - 4 equally spaced colors
