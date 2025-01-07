import React from 'react'
import '../styles/work.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Modal = ({onClose,content}) => {

    
  return (
    <div className='fr'>
  <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <div className='closrbutton'>
              <button className='closebutton' onClick={onClose}>x</button>
              </div>
                
                <div className='make-link'>
                   <LockOutlinedIcon className='icom'/>   https://www.paramsingh77/ <span className='diff'>{content?.name}</span> <CloseOutlinedIcon className='closee'/></div>
                <div className='iframe'>
                    <iframe className='cetn'
                        src="http://parminder-dev.web.app/proxy"
                        title="Embedded Link"
                        width={700}
                        height={400}
                        
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal