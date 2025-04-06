'use client';

import Image from "next/image";
import Header from "@/components/header";
import "@/app/local.css";
import {projectsData, productionTools} from "@/utils/project-data";
import ProjectCard from "@/components/project-card";
import { metadata } from "./layout";
import {certificationData} from "@/utils/certification-data";
import CertificationCard from "@/components/certification-card";
import { useEffect, useState, useRef } from "react";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar"
import me from "../../public/images/profile/me1.jpg"
// import cv from "@/utils/cv/Michael_Tetteh_cv.pdf";
// images


export default function Home() {
  const [bg, setBg]=useState("")
  const [bg1, setBg1]=useState("")
  const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef();
  const projectType =["Web Development","Cloud Computing","Machine Learning","Data Science"]

  const [query, setQuery] = useState('');

  const filteredData = projectsData.filter((item) =>
    item["type"].toLowerCase().includes(query.toLowerCase())
  );
  
  
      // useEffect(()=>{
      //   const handleOutsideClick = (e) => {
      //     // You can add more logic here to check if the click was outside a ref element
      //     if (isOpen) {
      //       setIsOpen(false);
      //       console.log("Dropdown closed");
      //     }
      //   };
      //   document.addEventListener("mousedown", handleOutsideClick);
      //   return () => {
      //     document.removeEventListener("mousedown", handleOutsideClick);
      //   }

      // },[isOpen])
 


  return (
    <>
    <Header />
    <Sidebar />
    <div className="main" id="Home">
      <div className="imageSection">
        <div>
          <Image src={me} alt="" />
        </div>
      </div>
      <div className="content" >
       <h1>Hi,</h1>
       <h1>I'm Michael Laryea Tetteh</h1>
       <h1>Software Engineer</h1>
        <p>I'am passionate about building scalable and efficient solutions. I specialize in web and software development, creating intuitive and high-performing applications and building cloud based solutions.</p>
        <a href="../utils/cv/Michael_Tetteh_cv.pdf" download><button className='button'>Download CV</button></a>

      </div>

      <hr style={{width:"90%",marginLeft:"30px",marginTop:"20px"}}></hr>


      {/* Personal Projects  */}
      <div className="projects" id="Projects">
        <h1> Projects</h1>
        <div className="projectFilter" >
        <i className="material-icons">search</i>
          <input value={`${query}`} type="text" placeholder="Enter a category   Eg: Web Application, Cloud Computing, Machine Learning" />
        </div>

        {isOpen &&(

            <div className={`dropdown ${isOpen ? 'slideDown' : 'slideUp'}`}>
            <ul>
            {projectType.map((type, index) => (
              <li key={index} onClick={() =>{ setQuery(type); setIsOpen(!isOpen)}} className="dropdown-item">
                {type}
              </li>
            ))}
            </ul>

          </div>
        )}

        <div className="items">
          {filteredData.map((project) => (
            <ProjectCard key={project["id"]} title={project["title"]} metadata={project} />
          ))}
        </div>
      </div>



      {/* Certifications  */}
      <div id="Certifications" className={`certifications ${bg1}`}>
        <h1> Certifications</h1>
        <div className="items">
          {
            certificationData.map((certification) => (
              <CertificationCard key={certification["id"]} title={certification["title"]} metadata={certification} />
            ))
          }
          
        </div>
      </div>



      {/* Tools  */}
      <div className="production-tools">
        <h1>Production Tools</h1>
        <div className="alltools">
          {productionTools.map((tools, index) =>(
            <div key ={index}>
              <Image  src={tools} alt="production tools"/>

            </div>
          ))}
          
        </div>
      </div>
    </div>
      <Footer />
    </>

  );
}