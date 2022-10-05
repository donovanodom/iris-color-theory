import React from "react";
import { useState } from "react";
import Controls from "./Controls";

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
    5: [301, 360]
  };

  const [scheme, setScheme] = useState(null);
  const [colors, setColors] = useState(null);
  const [base, setBase] = useState([randomNumber(0, 360),randomNumber(0, 100), randomNumber(0, 100)])

  const monoChromatic = (base) => {
    let arr = [base], s = 10 + Math.floor((Math.abs(base[1] - 50)/2)), l = 5 + Math.floor((Math.abs(base[2] - 50)/2)), i = 0
    while(i < 4){
      arr.push([
        base[0], 
        base[1] > 50 ? base[1] - (s + randomNumber(1,4)) : base[1] + (s + randomNumber(0,4)), 
        base[2] > 50 ? base[2] - (l + randomNumber(1,2)) : base[2] + (l + randomNumber(1,2))
      ])
      i++

    }
    return arr
  };
  
  const analogous = (base) => {
    let s1 = Math.floor(base[1] / 2), s2 = Math.floor(s1 / 2)
    return [
      base,
      [base[0] + 45 > 359 ? base[0] + 45 - 360 : base[0] + 45, s1, base[2]],
      [base[0] + 90 > 359 ? base[0] + 90 - 360 : base[0] + 90, s2, base[2]],
      [Math.abs(base[0] - 45), s1, base[2]],
      [Math.abs(base[0] - 90), s2, base[2]]
    ]
  }
  //45, -45, 90, -90

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
    setBase([randomNumber(0, 360),randomNumber(0, 100), randomNumber(0, 100)])
  }

  return (
    <div className="colors">
      <Controls 
        generate = {generate}
      />
      <div className="color-blocks">
        {monoChromatic(base).map(([h, s, l], i) => (
          <div
            key={i}
            style={{
              backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
              height: "100%"
            }}
          >
            {hslToHex(h, s, l).toUpperCase()}
          </div>
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
