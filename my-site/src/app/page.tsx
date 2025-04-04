'use client';

import Image from "next/image";
import Header from "@/components/header";
import "@/app/local.css";
import {projectsData, productionTools} from "@/utils/project-data";
import ProjectCard from "@/components/project-card";
import { metadata } from "./layout";
import {certificationData} from "@/utils/certification-data";
import CertificationCard from "@/components/certification-card";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
// import cv from "@/utils/cv/Michael_Tetteh_cv.pdf";
// images


export default function Home() {
  const [bg, setBg]=useState("")
  const [bg1, setBg1]=useState("")
  
      // useEffect(()=>{
      //   window.onscroll =()=>{
          
      //     if(scrollY > 277){
      //       setBg("")
      //       // console.log(scrollY)
      //     }
          
          
      //     if(scrollY > 1250){
      //       setBg1("")
      //       // console.log(scrollY)
      //     } 

      //   }
      // },[])
 


  return (
    <>
    <Header />
    <div className="main" id="Home">
      <div className="content" >
       <h1>Hi,</h1>
       <h1>I'm Michael Laryea Tetteh</h1>
       <h1>Software Engineer</h1>
        <p>I'am passionate about building scalable and efficient solutions. I specialize in web and software development, creating intuitive and high-performing applications.</p>
        <a href="../utils/cv/Michael_Tetteh_cv.pdf" download><button className='button'>Download CV</button></a>

      </div>

      <hr style={{width:"90%",marginLeft:"30px",marginTop:"20px"}}></hr>


      {/* Personal Projects  */}
      <div className="projects" id="Projects">
        <h1> Projects</h1>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="items">
          {projectsData.map((project) => (
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