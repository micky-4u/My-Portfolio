'use client';
import React from "react";
import Image from "next/image";

export default function ProjectCard(props) {
    const { title, metadata } = props;
    return (
        <div className="project-card">
            <div className="title">
                <h2>{title}</h2>
                <div>
                    <p>{metadata["metadata"]["type"]}</p>
                </div>

            </div>
            <div className="tools">
                
                {metadata["metadata"]["tools"].map((tool, index) => {
                    return (
                        <div key={index}>
                            <Image src ={tool} alt="tool-icon" />
                        </div>
                    )
                })}
            </div>
            {/* <p>{metadata["metadata"]["link"]}</p> */}
            <button onClick={() => window.open(metadata["metadata"]["link"], "_blank")}>View </button>

        </div>
    );
}