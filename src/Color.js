import React from 'react'

const Color = ({h, s, l, i, hslToHex}) => {
    return(
        <div
            className="color-block"
            key={i}
            style={{
                backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
            }}
        >
            <div className='color-code'>{hslToHex(h, s, l).toUpperCase()}</div>
        </div>
    )
}

export default Color