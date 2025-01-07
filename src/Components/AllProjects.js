import React, { useEffect, useState } from 'react';
import '../styles/work.css';
import { FaGithub } from 'react-icons/fa';
import Modal from '../Components/Modal.js';
import { capitalize } from '@mui/material';

const AllProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [data, setData] = useState([]);
  const [i,setI] = useState(0);
  let str = "Next Page"
  const [stats,setStats] = useState(str)

  const arr =['https://knowledge.hubspot.com/hubfs/tech-website-design-7-20240926-6132309.webp','https://marketplace.canva.com/EAEvfjdIStk/1/0/1600w/canva-dark-blue-simple-dark-tech-and-gaming-bio-link-website-PIa07NDoI20.jpg','https://www.hubspot.com/hubfs/technology-website-designs.png','https://www.webcitz.com/wp-content/uploads/2022/08/DocuSign-1024x609.png','https://cdn.prod.website-files.com/62d7b6a01a08db63e6328885/659bfea281177aa01ba827ee_6599b094c64ecc452b898666_techwimage01.jpeg','https://img.freepik.com/premium-vector/illustration-landing-page_176048-94.jpg?semt=ais_hybrid~~']
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.github.com/users/paramsingh77/repos`);
      const repos = await response.json();
      setData(repos);
    };
    getData();
  }, []);

  const openModal = (content) => {
    setContent(content);
    console.log("modal content set");
    
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setContent(null); // Reset content when closing
  };



  const selectData = (val) => {

    const content = { link: val.full_name, name: val.name };
    console.log( "links is " ,content.clone_url)
    openModal(content); // Open modal with selected content
  };
  console.log(data);
  const itemsToShow = data.slice(i,i+6);
  return (
    <>
      <div className='project-section1'>
        {
          itemsToShow.map((val, index) => (
            <div className='card-holder' key={index}>
              <div className='card1' onClick={() => selectData(val)}>
                <div className='image-holder'>
                  <img className='imgd' src={arr[index]} alt='' />
                </div>
                <div className='content-holder'>{capitalize(val.name)}</div>
                <div className='tag-holder'>
                  An AI-driven navigation app that helps users locate nearby businesses, boosting community engagement and local economies.
                </div>
                <div className='tags-holder'>
                  <ul>
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
                    <FaGithub className='icon' /> Source
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        <div className='next-button' onClick={()=>{
          if(i+6 < data.length){
            setI(i+6);
          }
          else{
            setStats("More to come")
          }
          
        }}>{stats}</div>
        {/* Modal should be rendered outside the map */}
        {isModalOpen && content && (
          <Modal onClose={closeModal} content={content} />
        )}
      </div>
    </>
  );
};

export default AllProjects;
