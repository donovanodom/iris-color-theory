import React from 'react'
import {useState} from 'react'
import { FiHelpCircle } from 'react-icons/fi'

const Instructions = () => {
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return(
        <div className={open ? 'open-instructions' : 'instructions'} onClick={handleOpen}>
            <FiHelpCircle id='help'/>
            <ul className='instructions-list'>
                <li>Select color pallete type.</li>
                <li>Press the _ or enter to generatea random color pallete.</li>
                <li>Use the mousescroll or touchpad scroll to increase or decrease color count.</li>
            </ul>
        </div>
    )
}

export default React.memo(Instructions)