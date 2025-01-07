import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import '../styles/ed.css'
// Uncomment if you want to use TimelineConnector
// import TimelineConnector from '@mui/lab/TimelineConnector';

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleSizeChange);

    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, []);

  return (
    <>
      {width < 430 ? <MobileVersion /> : <WebVersion />}
    </>
  );
};

const WebVersion = () => {
  return (
    <div>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <img
                style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%', backgroundColor: 'gray' }}
                src="https://www.professors.directory/gallery/1277_al-university_of_north_alabama_xmw.jpg"
                alt="ele"
              />
            </TimelineDot>
            {/* Uncomment if you want to use TimelineConnector */}
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <div className='date'>January 2023 - May 2024</div>
              <div className='work-place'>University of North Alabama</div>
              <div className='role'>Bachelor's of Computer Science</div>
              <div className='points'>
                <ul>
                  <li className='lis'>
                    <b>Related Coursework:</b> Data Structures & Algorithms, Computer Organization & Programming, Machine Learning, Artificial Intelligence, Object Oriented Design, Operating Systems
                  </li>
                </ul>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

const MobileVersion = () => {
  return (
    <div className='dot-desc2'>
      <div className='work-3'>
        <div className='logogo3'>
          <div className='make-circle3'>
            <img
              style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%', backgroundColor: 'gray' }}
              src="https://www.professors.directory/gallery/1277_al-university_of_north_alabama_xmw.jpg"
              alt="ele"
            />
          </div>
        </div>
        <div className='descm3'>
          <div>
            <div className='date3'>January 2023 - May 2024</div>
            <div className='work-place3'>University of North Alabama</div>
            <div className='role3'>Bachelor's of Science in Computer Science</div>
            <div className='points3'>
              <ul>
              <b>Related Coursework:</b> Data Structures & Algorithms, Computer Organization & Programming, Machine Learning, Artificial Intelligence, Object Oriented Design, Operating Systems
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
