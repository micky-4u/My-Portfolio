'use client'

import React from 'react'
import "@/app/local.css"
import { useEffect } from "react";

export default function Header() {

    useEffect(() => {
        const header = document.querySelector('.header');

    }, []);
    const links =["Home","Contact","Projects","Certifications"]

    
  return (
    <div className='header'>
        <ul>
            {links.map((link, index)=>(
                <li key={index}><a href={"#"+link}>{link}</a></li>

            ))}
        </ul>

    </div>
  )
}