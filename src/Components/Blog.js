import React from 'react'
import '../styles/work.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const Blog = () => {
    // const navigate = useNavigate();
  return (
    <div className='blog-section'>
        <div className='blog-flex'>
        <div className='blog-title'>
            recent posts
            </div>
            <Link to={"/allposts"}>
            <div className='small'>
                more projects <ArrowForwardIcon className='arrow'/>
            </div>
            </Link>
        </div>
        <div className='post-tiles'>
            <div className='set-width'>

                <div className='tilte-desc'>
                    <div className='title-post'>Portfolio is live</div>
                    <div className='post'>Built Dynamic Portfolio..</div>
                </div>
                <div className='date-post'>Sep 15, 2024</div>

        </div>
        </div>
        <div className='post-tiles'>
                <div className='tilte-desc'>
                    <div className='title-post'>Learning System design will be a new trend</div>
                    <div className='post'>Built Dynamic Portfolio....</div>
                </div>
                <div className='date-post'>Oct 25,2024</div>

        </div>
           
        </div>

  )
}

export default Blog