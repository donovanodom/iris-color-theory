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
    5: [301, 360],
  };

  const [scheme, setScheme] = useState("monoChromatic");
  const [count, setCount] = useState(4);
  const [base, setBase] = useState(
    [randomNumber(0, 360), randomNumber(80, 95), randomNumber(80, 95)],
  );

  const monoChromatic = (base, count) => {
    let arr = [],
      i = 1,
      s = Math.floor(base[1] / count),
      l = Math.floor(base[2] / count);
    while (i <= count) {
      arr.push([
        base[0] > 20 && base[0] < 340
          ? base[0] + randomNumber(-20, 20)
          : base[0] < 20
          ? base[0] + randomNumber(0, 40)
          : base[0] + randomNumber(-40, 0),
        s * i + randomNumber(-5, 5),
        l * i + randomNumber(-5, 5),
      ]);
      i++;
    }
    return arr.reverse();
  };
  const schemes = {
    monoChromatic: monoChromatic,
  };

  // const analogous = (base) => {
  //   let s1 = Math.floor(base[1] / 2), s2 = Math.floor(s1 / 2)
  //   return [
  //     base,
  //     [base[0] + 45 > 359 ? base[0] + 45 - 360 : base[0] + 45, s1, base[2]],
  //     [base[0] + 90 > 359 ? base[0] + 90 - 360 : base[0] + 90, s2, base[2]],
  //     [Math.abs(base[0] - 45), s1, base[2]],
  //     [Math.abs(base[0] - 90), s2, base[2]]
  //   ]
  // }
  // 45, -45, 90, -90

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

  return (
    <div className="colors">
      <Controls generate={generate} handleCount={handleCount} count={count} />
      <div className="color-blocks">
        {schemes[scheme](base, count).map(([h, s, l], i) => (
          <div
            className="color-block"
            key={i}
            style={{
              backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
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
