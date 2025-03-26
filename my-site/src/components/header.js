'use client'

import React from 'react'
import "@/app/local.css"
import { useEffect, useState } from "react";

export default function Header(props) {

    const [bg3, setBg3]=useState("")

    useEffect(()=>{
      window.onscroll =()=>{
        
        if(scrollY > 140){
          setBg3("oncover")
        } else{
          setBg3("")
        }
      }
    },[])
   
    const links =["Home","Contact","Projects","Certifications"]

    
  return (
    <div className={`header ${bg3}`}>
        <ul>
            {links.map((link, index)=>(
                <li key={index}><a href={"#"+link}>{link}</a></li>

            ))}
        </ul>

    </div>
  )
}