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
  const [count, setCount] = useState(5);
  const [colors, setColors] = useState(null);

  const monoChromatic = (base, count) => {
    return Array(count)
      .fill()
      .map(() => [base, randomNumber(10, 100), randomNumber(10, 100)]);
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0"); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  return (
    <div className="colors">
      <Controls />
      <div className="color-blocks">
        {monoChromatic(randomNumber(0, 360), count).map(([h, s, l], i) => (
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
