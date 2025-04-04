'use client'

import React from 'react'
import "@/app/local.css"
import { useEffect, useState } from "react";
import github from "../../public/images/contact/git.png"
import linkedIn from "../../public/images/contact/linked.png"
import phone from "../../public/images/contact/call.png"
import mail from "../../public/images/contact/mail.webp"
import Image from 'next/image';




export default function Header(props) {

    // const [bg3, setBg3]=useState("")


   
    const links =["Micky4u","Projects","Certifications","Production Tools"]

    
  return (
    <div className={`header oncover`} id="Micky4u">
        <ul>
            {links.map((link, index)=>(
                <li key={index}><a href={"#"+link}>{link}</a></li>

            ))}
        </ul>
        <div className='contacts'>
          <a href="https://github.com/micky-4u" target='_blank' ><Image src={github} alt=''/></a>
          <a href="https://www.linkedin.com/in/michael-tetteh-a5a9a6220/" target='_blank'><Image src={linkedIn} alt=''/></a>
          <a href="mailto:laryeamichael4u@gmail.com" target='_blank'><Image src={mail} alt=''/></a>
          <Image src={phone} alt=''/>
          <p>+233 55868 5990</p>


        </div>

    </div>
  )
}