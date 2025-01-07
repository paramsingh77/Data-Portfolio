import React, { useState } from 'react'
import '../styles/Me.css'
// import * as Reac /t from 'react';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Modals from '../Components/Modals.js'
const Me = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[content,setContent] = useState(null);

    const openModal = (content)=>{
        setContent(content);
        console.log("Content open");
        
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setContent(null);
    }

    const selectData =()=>{
        const link = `/src/images/Resume_parminder.AI.pdf`
        openModal(link)
    };

  return (
    <div className='flexd'>
        <div className='flex'>
            <div className='content'>
                <div className='title'>Hi Parminder here 👋</div>
                <div className='Description'>
                23 - year- old Data Analyst.
                <br/>
                <br/>
                I enjoy analyzing data trends, sipping instant coffee, and brainstorming insights with my cat, Luffy.
                </div>
                <div className='button-class flexf'>
                    <div className='height-100'>
                <div onClick={selectData} className='butttons'>
                Resume {<SimCardDownloadIcon/>}
                </div>
 
                  </div>
                    <div>
                        <ul className='flex9'>
                            <a href='https://www.linkedin.com/in/psingh20'><li><LinkedInIcon/></li></a>
                            <a href='https://www.github.com/paramsingh77'><li><GitHubIcon/></li></a>
                            <a href='psinghdev13@gmail.com'> <li><EmailIcon/></li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='profilephoto'>
            </div>
            {
                isModalOpen && content && (
                    <Modals onClose={closeModal} content={content}/>
                )
            }
        </div>
    </div>
  )
}

export default Me