'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'


export default function CertificationCard(props) {
    const {metadata} = props;
    
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        window.open((metadata["metadata"]["link"]), "_blank")
    }

    return(
        <div className="certification-card">
            <div onClick={handleClick} className="images">
            <Image className="image" src={metadata["metadata"]["imagePaths"]}  alt="Picture of the author" />
            </div>
            <h2>{metadata["title"]}</h2>
            {/* <p>{metadata["metadata"]["description"]}</p> */}
        </div>
    )
}
