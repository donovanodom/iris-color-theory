import React from 'react'

const Color = ({h, s, l, i, hslToHex}) => {
    const hexToRgb = function(str){
        str = str.slice(1)
        let RgbHex = str.match(/.{1,2}/g);
        return `rgb(${parseInt(RgbHex[0], 16)}, ${parseInt(RgbHex[1], 16)}, ${parseInt(RgbHex[2], 16)})`
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
                <li>{hex}</li>
                <li>{hexToRgb(hex)}</li>
            </ul>
        </div>
    )
}

export default Color