import React from "react";
import { useState } from "react";
import Controls from "./Controls";
import Color from './Color';

const Colors = () => {
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  

  const hsv = {
    0: [0, 16],
    1: [61, 120],
    2: [121, 180],
    3: [181, 240],
    4: [241, 300],
    5: [301, 360],
  };

  const [scheme, setScheme] = useState("monoChromatic");
  const [count, setCount] = useState(4);
  const [base, setBase] = useState(
    [randomNumber(0, 359), randomNumber(80, 95), randomNumber(80, 95)],
  );
  
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
    let arr = [base],
      i = 2,
      s = Math.floor(base[1] / count),
      l = Math.floor(base[2] / count);
    while (i <= count) {
      arr.push([
        base[0] > 20 && base[0] < 340
          ? base[0] + randomNumber(-20, 20)
          : base[0] < 20
          ? base[0] + randomNumber(0, 40)
          : base[0] + randomNumber(-40, 0),
        s * i + randomNumber(0, 5),
        l * i + randomNumber(0, 5),
      ]);
      i++;
    }
    return shuffleOrder(arr)
  };
  
  const analogous = (base, count) => {
    let i = 0, j = 0, arr = [], piv = [...base], shift = [0,-35,-70,35,70]
    
    while(i < count){
      let s = randomNumber(-20,-1), l = randomNumber(-20,-1)
      piv[1] = piv[1] + s < 20 ? randomNumber(50,90) : piv[1] + s
      piv[2] = piv[2] + l < 20 ? randomNumber(50,90) : piv[2] + l
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
        piv[1] = piv[1] + s < 20 ? randomNumber(50,90) : piv[1] + s
        piv[2] = piv[2] + l < 20 ? randomNumber(50,90) : piv[2] + l
        arr.push([piv[0], piv[1], piv[2]])
      }else{
        arr.push([comp, piv[1], piv[2]])
      }
      i++
    }
    return shuffleOrder(arr)
  }
  
  const schemes = {
    monoChromatic: monoChromatic,
    analogous: analogous,
    complementary: complementary
  };

 
  // 35

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
    setBase([randomNumber(0, 360), randomNumber(80, 95), randomNumber(80, 95)]);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };
  
  const handleScheme = (e) => {
    setScheme(e.target.value)
  }

  return (
    <div className="colors">
      <Controls generate={generate} handleCount={handleCount} count={count} handleScheme={handleScheme} scheme={scheme}/>
      <div className="color-blocks">
        {schemes[scheme](base, count).map(([h, s, l], i) => (
          <Color 
            key={i}
            h={h}
            s={s}
            l={l}
            i={i}
            hslToHex={hslToHex}
          />
        ))}
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
