import React from 'react'

const Logo = () => {

    return (
        <div className='logo'> iris <div style={{display: 'inline', fontWeight: '300'}}>&nbsp; color theory</div></div>
    )
}

export default React.memo(Logo)