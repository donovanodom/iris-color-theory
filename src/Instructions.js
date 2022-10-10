import React from 'react'
import {useState} from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import { FaRedoAlt } from "react-icons/fa";

const Instructions = () => {
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return(
        <div className={open ? 'open-instructions' : 'instructions'} onClick={handleOpen}>
            <FiHelpCircle id='help'/>
            <ul className='instructions-list'>
                <li>Select color pallete theme.</li>
                <li>Press <FaRedoAlt style={{display: 'inline', position: 'relative', top: '3px'}}/> or <div style={{display: 'inline', fontStyle: 'italic'}}>enter</div> to generate random color pallete.</li>
                <li>Use the mouse scroll or touchpad scroll to increase or decrease color count.</li>
            </ul>
        </div>
    )
}

export default React.memo(Instructions)