import React from 'react'
import '../styles/work.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Modals = ({onClose,content}) => {
console.log("Modal open");

return (
<div className='fr1 fixed'>
  <div className='modal-overlay1' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <div className='closrbutton'>
              <button className='closebutton' onClick={onClose}>x</button>
              </div>
                
                <div className='make-link'>
                   <LockOutlinedIcon className='icom'/>   https://www.paramsingh77/Resume <span className='diff'>{content?.name}</span> <CloseOutlinedIcon className='closee'/></div>
                <div className='iframe'>
                    <iframe className='cetn'
                        src='Parminder Singh Resume Updated.pdf'
                        title="Embedded Link"
                        width={700}
                        height={800}
                        zoom={100}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modals