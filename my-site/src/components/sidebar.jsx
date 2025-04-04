import github from "../../public/images/contact/git.png"
import linkedIn from "../../public/images/contact/linked.png"
import phone from "../../public/images/contact/call.png"
import mail from "../../public/images/contact/mail.webp"
import Image from 'next/image';


export default function Sidebar(){


    return(
        <div className="sidebar" id="sidebar">
            <div className="sideContact">
                <div>
                <a href="https://github.com/micky-4u" target='_blank' ><Image src={github} alt=''/></a>
                    <p>Github</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/michael-tetteh-a5a9a6220/" target='_blank'><Image src={linkedIn} alt=''/></a>
                    <p>LinkedIn</p>
                </div>
                <div>
                <a href="mailto:laryeamichael4u@gmail.com" target='_blank'><Image src={mail} alt=''/></a>
                    <p>Gmail</p>
                </div>
                <div>
                    <Image src={phone} alt="git" />
                    <p>+233 55 969 5990</p>
                </div>
            </div>
        </div>
    )
}