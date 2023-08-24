// components/Projects.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import img1 from './../Assets/html.png';
import img2 from './../Assets/css.png';
import img3 from './../Assets/javascript.png';
import img4 from './../Assets/Nykaa.png';
import img5 from './../Assets/haan.png';
 
import img7 from './../Assets/react.png';
import img8 from './../Assets/travelapp2.png';
import img9 from './../Assets/starrating.png';
import img10 from './../Assets/todoimg.png'
import img11 from './../Assets/youtubeimg.png'
import img12 from './../Assets/redux.png'
import img13 from './../Assets/bootstrap.png'
import img14 from './../Assets/cycleshop.png'
import img15 from './../Assets/quize-app.png'
const projectsData = [
  {
    title: 'You Tube Clone',
    image: img11,
    description: 'Created a YouTube Clone with core features like commenting, channel subscriptions, google authentication, home page with recommended videos, categories video, and easily search for content.',
    techStack: [img7,img12,img13,img3],
    aLink:"https://github.com/Dipanshu-verma/solowork/tree/main/youtube",
    liveLink:"https://drive.google.com/drive/u/1/folders/1_MEUsC82H5T_f8PreEPQgFB2fWUyh0UR"
  },
  {
    title: 'Todo App',
    image: img10,
    description: 'Built a React-based Todo App with toggling, deletion, and pagination powered by a mock server. Showcases my proficiency in frontend development and API handling.',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/Dipanshu-verma/solowork/tree/main/Questions/todo",
    liveLink:"https://64e02ba5a489b6110c34cea3--imaginative-fox-cac917.netlify.app/"
  },
  {
    title: 'Quize App',
    image: img15,
    description: 'Created a React quiz app with real-time scoring, answer toggles, timed exam control, and accurate result tracking. Showcases my frontend skills in crafting engaging and interactive applications.',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/Dipanshu-verma/solowork/tree/main/Questions/quizeapp_noapi",
    liveLink:"https://illustrious-quize-app-fa65e0.netlify.app/"
  },
  {
    title: 'Star Rating App',
    image: img9,
    description: 'Created a star rating app using React, where clicking on a star updates the rating with comments and color changes. Demonstrates my skill in interactive frontend development.',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/Dipanshu-verma/solowork/tree/main/Questions/Ratingstar/login",
    liveLink:"https://meek-sunburst-dc104b.netlify.app/"
  },
  {
    title: 'Travel and Tour',
    image: img8,
    description: 'Experience the world like never before with our Travel and Tour Website. Explore, plan, and make unforgettable memories with our Travel and Tour Website."',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/Dipanshu-verma/solowork/tree/main/treval",
    liveLink:"https://dynamic-chaja-918910.netlify.app/"
  },

  {
    title: 'Nykaa',
    image: img4,
    description: 'Nykaa is an e-commerce website that offers a wide range of beauty and wellness products. With a user-friendly interface and a vast selection of brands and products.',
    techStack: [img1, img2, img3],
    aLink:"https://github.com/shivamcalis1998/teamNakya",
    liveLink:"https://fantastic-squirrel-6303d3.netlify.app/"
  },
  {
    title: 'Haan Sanitizer',
    image: img5,
    description: 'Crafted a user-friendly hand sanitizer e-commerce platform with intuitive navigation, seamless product selection, interactive cart, and efficient checkout. Showcases my frontend expertise.',
    techStack: [img1, img2, img3],
    aLink:"https://github.com/samarjeetpatankar/Hand-Sanitizer-website",
    liveLink:"https://haan-website-clone-pt12.netlify.app/"
  },
  {
    title: 'Cycle Shop',
    image: img14,
    description: 'Developed an intuitive online cycle shop, enabling easy product selection, sorting, and checkout. Showcases my expertise in creating seamless e-commerce experiences.',
    techStack: [img2, img3, img1],
    aLink:"https://github.com/Rensi2411/cycle-shop",
    liveLink:"https://64dc7b507eb4113e4aa4919c--relaxed-toffee-9561a5.netlify.app/index.html"
  },
  
];

const Projects = () => {
  return (
    <section className="project-list" id="project">
      <h1 className="subtitle">Recent <span>Projects</span></h1>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt="" />
            <div className="project-detail">
              <div className="heading">
                <h2>{project.title}</h2>
                <div>
                  <a href={project.aLink}><i className='bx bxl-github'> <FaGithub /> </i></a>
                  <a href={project.liveLink} id="live-btn"><i className='bx bx-world'> <BiWorld /> </i></a>
                </div>
              </div>
              <p><span>{project.description}</span></p>
              <div id="tech-stack">
                {project.techStack.map((tech, index) => (
                  <img key={index} src={tech} alt="" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#">See More &gt;&gt;</a>
    </section>
  );
}

export default Projects;
