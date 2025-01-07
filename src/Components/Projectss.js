import React from 'react'
import '../styles/work.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ern from '../images/ern.png' 
import nearme from '../images/nearme.png'
// import { useNavigate } from 'react-router-dom';
const Projectss = () => {
    // const navigate = useNavigate();


  return (
    <div className='project-section'>
        <div className='project-title'>
            <div>
            featured projects
            </div>
            <Link to={'/projects'}>
            <div className='small'>
             more projects <ArrowForwardIcon className='arrow'/>
            </div>
            </Link>
          
        </div>
        <div className='card-holder'>
            <div className='card'>
                <div className='image-holder'><img className='imgd' src={nearme} alt='' /></div>
                <div className='content-holder'>Find Near Me </div>
                <div className='tag-holder'>An AI-driven navigation app that helps users locate nearby businesses, boosting community engagement and local economies.</div>
                <div className='tags-holder'>
                    <ul className=''>
                        <li>AI/ML</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>TailwindCSS</li>
                        <li>Google Maps API</li>
                    </ul>
                </div>
                <div className='source-holder'>
                    <div className='gitag'>
                    <FaGithub className='icon' /> Source</div>
                    </div>
                   
            </div>
            <div className='card'>
            <div className='image-holder'><img className='imgd' src={ern} alt='' /></div>
                <div className='content-holder'>Enterprise Risk Navigator </div>
                <div className='tag-holder'>An AI-driven navigation app that helps users locate nearby businesses, boosting community engagement and local economies.</div>
                <div className='tags-holder'>
                    <ul className=''>
                        <li>C++</li>
                        <li>Wt</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>TailwindCSS</li>
                        <li>MySQL</li>
                        <li>Risk Analysis</li>
                    </ul>
                </div>
                <div className='source-holder'>
                 <a href='https://github.com/paramsingh77/findNearMe' target='_blank' rel='noreferrer'><div className='gitag'>
                    <FaGithub className='icon' /> Source</div>
                </a>   
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Projectss