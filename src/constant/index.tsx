
import { FiGithub } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn, FaFacebook } from "react-icons/fa";



export const mainLinks = [
    { title: "Home", link: "#hero" },
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
]

export const ComunicationsWay = [
    { icon: <FiGithub />, link: "https://github.com/mohammedsalhyen" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohammed-abdelsalhyen-sherief-8976441b8/" },
    { icon: <FaWhatsapp />, link: "https://wa.me/201110948994" },
    { icon:<FaFacebook/>,link:"https://www.facebook.com/mohammed.abdelsalhyen"}

]
export const jobs = ["Frontend Developer", "Tailwind CSS Expert", "Next.js Specialist"]

export const ContactInfo = [
    { title: "Email", text:"mohammedsalhyen1@gmail.com", icon: <MdAlternateEmail /> },
    { title: "Phone", text:"(+20) 1097365299", icon: <FaPhone /> },
    { title: "Location", text:"Cairo,Egypt", icon: <FaMapMarkerAlt /> }
]