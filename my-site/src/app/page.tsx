import Image from "next/image";
import Header from "@/components/header";
import "@/app/local.css";
import {projectsData, productionTools} from "@/utils/project-data";
import ProjectCard from "@/components/project-card";
import { metadata } from "./layout";
import {certificationData} from "@/utils/certification-data";
import CertificationCard from "@/components/certification-card";
// images


export default function Home() {
  return (
    <div className="main" >
      <Header />
      <div className="content" id="home">
       <h1>Hi,</h1>
       <h1>I'm Michael Laryea Tetteh</h1>
       <h1>Software Engineer</h1>
        <p>I'am passionate about building scalable and efficient solutions. I specialize in web and software development, creating intuitive and high-performing applications.</p>
        <button className='button'>Download CV</button>

      </div>

      <hr style={{width:"90%",marginLeft:"30px",marginTop:"20px"}}></hr>


      {/* Personal Projects  */}
      <div className="projects" id="Projects">
        <h1> Projects</h1>

        <div className="items">
          {projectsData.map((project) => (
            <ProjectCard key={project["id"]} title={project["title"]} metadata={project} />
          ))}
        </div>
      </div>



      {/* Certifications  */}
      <div id="Certifications" className="certifications">
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
  );
}