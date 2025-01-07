import React, { useEffect, useState } from 'react'
import '../styles/work.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MobileScreen from '../Components/MobileScreen.js'
const Work = () => {
  const [width,setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleSizeChange = () =>{
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleSizeChange);

    return () => {
      window.removeEventListener('resize',handleSizeChange);
    }
  })
  return (
    <>

    { width < 430 ? <MobileScreen/> : <WebScreen/>}
   
    </>
    
  )
}


const WebScreen = () => {
  return(
 <div className='setw'>
    <Timeline className='timelinee'
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <div>
          <TimelineDot 
  sx={{
    backgroundColor: '#1F2937',
    padding: '2px',
    margin: '0',
    border: '2px solid #8F97A3',
    '&.MuiTimelineDot-root': {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }}
>
       <img style={{height:'40px', width:'40px', objectFit:'cover', borderRadius:'50%', backgroundColor:'gray'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-kscLgxvLG0EwEnn81o4SCSoxNmGDXng-w&s" alt="ele"/>
         </TimelineDot>
         </div>
          <TimelineConnector />
          <TimelineConnector/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent className=''>
        <div>
          <div className='date'>July 2024 - Present</div>
          <div className='work-place'>Universal Health Services</div>
          <div className='role'>Data Analyst</div>
          <div className='points'>
            <ul>
            <li className='lis'> Evaluated and enhanced the current data model to meet healthcare industry standards and requirements.</li>
            <li className='lis'>Collaborated with cross-functional teams using Agile methodology, resulting in an increase in project efficiency and on-time delivery
            of data analytics solutions.</li>
            <li className='lis'>Incorporated AWS services like S3 bucket & Redshift to manage and analyze healthcare data securely, resulting in 30% improvement
            in data processing speed.</li>
            <li className='lis'>Designed interactive dashboards using Tableau and Power BI, providing actionable insights to healthcare teams, leading to a 20%
            increase in patient satisfaction scores.</li>
            <li className='lis'>Developed and maintained ETL pipelines using Python and SQL to streamline EDI download and financial data analysis processes,
            supporting production and material planning.</li>
            <li className='lis'>Conducted graphical analysis of healthcare datasets using Python to obtain insights into patient demographics and treatment
            outcomes</li>
            </ul>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='t2'>
        <TimelineSeparator>
          <TimelineDot>
            <img style={{height:'40px', width:'40px', objectFit:'cover', padding:-10, borderRadius:'50%', backgroundColor:'gray'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAAl79cWgfMIM5xgBAC9a6BkiR4XzAl_JNQ&s" alt="ele"/>
         </TimelineDot>
          <TimelineConnector />
          <TimelineConnector/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
        <div>
          <div className='date'>Jan 2020 - July 2022</div>
          <div className='work-place'>Byte Tech Solutions</div>
          <div className='role'>Data Analyst</div>
          <div className='points'>
            <ul>
            <li className='lis'>Applied DAX functions to create interactive and insightful dashboards in Power BI, which enhanced data visualization
            capabilities and improved stakeholder engagement.t</li>
            <li className='lis'>Developed and maintained interactive Power BI dashboards providing real-time insights into KPIs, leading to an increase
            in decision-making speed.</li>
            <li className='lis'>Optimized data pipelines to ensure efficient data flow and processing, resulting in a 15% reduction in processing time.
            <li className='lis'> Improved data models and cleansed data using SQL ensuring high-quality data for projects.</li>
            </li>
            </ul>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>

  )
}

export default Work